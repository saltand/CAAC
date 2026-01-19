'use client'

import type { CatImageProps as BaseCatImageProps, CatImageRef } from '../shared'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { fetchCatImage, isBrowser } from '../shared'

interface CatImageProps extends BaseCatImageProps {
  className?: string
  style?: React.CSSProperties
  onLoad?: (url: string) => void
  onError?: (error: Error) => void
  onChange?: (url: string) => void
}

export const CatImage = forwardRef<CatImageRef, CatImageProps>(({
  width = 300,
  height = 300,
  placeholder = 'Loading cat...',
  showSwitchButton = false,
  apiKey,
  className,
  style,
  onLoad,
  onError,
  onChange,
}, ref) => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  const loadCatImage = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await fetchCatImage(apiKey)

      if (result.error || !result.data) {
        const err = result.error || new Error('Failed to load cat image')
        setError(err)
        onError?.(err)
      }
      else {
        const url = result.data.url
        setImageUrl(url)
        onLoad?.(url)
        if (!isFirstLoad) {
          onChange?.(url)
        }
        setIsFirstLoad(false)
      }
    }
    catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')
      setError(error)
      onError?.(error)
    }
    finally {
      setLoading(false)
    }
  }, [apiKey, isFirstLoad, onLoad, onError, onChange])

  useImperativeHandle(ref, () => ({
    change: loadCatImage,
  }), [loadCatImage])

  useEffect(() => {
    if (isBrowser()) {
      loadCatImage()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Computed styles
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #e1e5e9',
    backgroundColor: '#f8f9fa',
    ...style,
  }

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    cursor: 'pointer',
  }

  const placeholderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color: '#6c757d',
    fontSize: '14px',
    textAlign: 'center',
    padding: '16px',
  }

  const errorStyle: React.CSSProperties = {
    ...placeholderStyle,
    color: '#dc3545',
  }

  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    padding: '6px 12px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'background-color 0.2s',
  }

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  }

  return (
    <div style={wrapperStyle}>
      <div className={className} style={containerStyle}>
        {loading
          ? (
              <div style={placeholderStyle}>{placeholder}</div>
            )
          : error
            ? (
                <div style={errorStyle}>
                  <span>Failed to load cat image</span>
                  <button
                    type="button"
                    onClick={loadCatImage}
                    style={{ ...buttonStyle, position: 'static', marginLeft: '8px' }}
                  >
                    Retry
                  </button>
                </div>
              )
            : (
                <img
                  src={imageUrl}
                  alt="Random cat"
                  style={imageStyle}
                  onClick={loadCatImage}
                />
              )}
      </div>
      {showSwitchButton && !loading && !error && (
        <button
          type="button"
          onClick={loadCatImage}
          style={buttonStyle}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)')}
        >
          Switch Cat
        </button>
      )}
    </div>
  )
})

CatImage.displayName = 'CatImage'

export type { CatImageProps, CatImageRef }
