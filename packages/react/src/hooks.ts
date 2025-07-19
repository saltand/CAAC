/**
 * React hooks for cat image functionality
 * Provides reusable logic for cat image components
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  fetchCatImage, 
  isBrowser,
  type CatImageProps, 
  type CatImageEvents, 
  type CatImageState 
} from '@caac/shared';

export function useCatImage(props: CatImageProps & CatImageEvents) {
  // State management
  const [state, setState] = useState<CatImageState>({
    imageUrl: '',
    loading: true,
    error: ''
  });

  // Image event handlers
  const handleImageLoad = useCallback(() => {
    setState(prev => ({ ...prev, loading: false }));
    props.onLoad?.(state.imageUrl);
  }, [state.imageUrl, props.onLoad]);

  const handleImageError = useCallback(() => {
    const errorObj = new Error('Failed to load cat image');
    setState(prev => ({ ...prev, error: errorObj.message, loading: false }));
    props.onError?.(errorObj);
  }, [props.onError]);

  // Main function to fetch and change cat image
  const change = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: '' }));
    
    try {
      const result = await fetchCatImage(props.apiKey);
      
      if (result.error) {
        setState(prev => ({ ...prev, error: result.error!.message, loading: false }));
        props.onError?.(result.error);
      } else if (result.data) {
        setState(prev => ({ 
          ...prev, 
          imageUrl: result.data!.url, 
          loading: false 
        }));
        props.onChange?.(result.data.url);
      }
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      setState(prev => ({ ...prev, error: errorObj.message, loading: false }));
      props.onError?.(errorObj);
    }
  }, [props.apiKey, props.onError, props.onChange]);

  // Initialize on mount (SSR-safe)
  useEffect(() => {
    if (isBrowser()) {
      change();
    }
  }, [change]);

  return {
    state,
    handleImageLoad,
    handleImageError,
    change
  };
}

/**
 * Hook for managing cat image dimensions
 */
export function useCatImageDimensions(width?: string | number, height?: string | number) {
  const normalizeValue = useCallback((value: string | number | undefined): string => {
    if (value === undefined) return 'auto';
    if (typeof value === 'number') return `${value}px`;
    return value;
  }, []);

  return {
    width: normalizeValue(width),
    height: normalizeValue(height)
  };
}