'use client';

import React, { 
  useState, 
  useEffect, 
  useCallback, 
  useImperativeHandle, 
  forwardRef 
} from 'react';
import { 
  fetchCatImage, 
  normalizeDimension, 
  isBrowser,
  type CatImageProps, 
  type CatImageEvents, 
  type CatImageRef 
} from '@caac/shared';

// Combined props interface
interface CatImageComponentProps extends CatImageProps, CatImageEvents {
  className?: string;
  style?: React.CSSProperties;
}

export const CatImage = forwardRef<CatImageRef, CatImageComponentProps>(
  ({ 
    width = 300, 
    height = 300, 
    placeholder = 'Loading cat...', 
    showSwitchButton = false,
    apiKey,
    onLoad, 
    onError, 
    onChange,
    className,
    style 
  }, ref) => {
    // State management
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    // Image event handlers
    const handleImageLoad = useCallback(() => {
      setLoading(false);
      onLoad?.(imageUrl);
    }, [imageUrl, onLoad]);

    const handleImageError = useCallback(() => {
      const errorObj = new Error('Failed to load cat image');
      setError(errorObj.message);
      setLoading(false);
      onError?.(errorObj);
    }, [onError]);

    // Main function to fetch and change cat image
    const change = useCallback(async () => {
      setLoading(true);
      setError('');
      
      try {
        const result = await fetchCatImage(apiKey);
        
        if (result.error) {
          setError(result.error.message);
          onError?.(result.error);
        } else if (result.data) {
          setImageUrl(result.data.url);
          onChange?.(result.data.url);
          // Note: onLoad will be triggered by the img element's load event
        }
      } catch (err) {
        const errorObj = err instanceof Error ? err : new Error('Unknown error');
        setError(errorObj.message);
        onError?.(errorObj);
      } finally {
        setLoading(false);
      }
    }, [apiKey, onError, onChange]);

    // Expose methods for parent component access
    useImperativeHandle(ref, () => ({ change }), [change]);

    // Initialize on mount (SSR-safe)
    useEffect(() => {
      if (isBrowser()) {
        change();
      }
    }, [change]);

    // Computed styles
    const normalizedWidth = normalizeDimension(width);
    const normalizedHeight = normalizeDimension(height);

    const containerStyle: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: normalizedWidth,
      height: normalizedHeight,
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #e1e5e9',
      backgroundColor: '#f8f9fa',
      ...style
    };

    const imageStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    };

    const placeholderStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      color: '#6c757d',
      fontSize: '14px',
      textAlign: 'center',
      padding: '16px'
    };

    const errorStyle: React.CSSProperties = {
      ...placeholderStyle,
      color: '#dc3545'
    };

    const buttonStyle: React.CSSProperties = {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      padding: '6px 12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: loading ? 'not-allowed' : 'pointer',
      fontSize: '12px',
      transition: 'background-color 0.2s',
      opacity: loading ? 0.6 : 1
    };

    return (
      <div className={className} style={containerStyle}>
        {loading ? (
          <div style={placeholderStyle}>
            {placeholder}
          </div>
        ) : error ? (
          <div style={errorStyle}>
            Error: {error}
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="Random cat"
            style={imageStyle}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        {showSwitchButton && (
          <button
            style={buttonStyle}
            onClick={change}
            disabled={loading}
            onMouseEnter={(e) => {
              if (!loading) {
                (e.target as HTMLButtonElement).style.backgroundColor = '#0056b3';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                (e.target as HTMLButtonElement).style.backgroundColor = '#007bff';
              }
            }}
          >
            换猫
          </button>
        )}
      </div>
    );
  }
);

CatImage.displayName = 'CatImage';