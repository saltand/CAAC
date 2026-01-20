'use client'

import type { CatImageData } from '../shared'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { fetchCatImages, isBrowser } from '../shared'

export interface CatGalleryProps {
  count?: number
  columns?: number
  gap?: number
  imageWidth?: number | string
  imageHeight?: number | string
  apiKey?: string
  className?: string
  style?: React.CSSProperties
  onLoad?: (images: CatImageData[]) => void
  onError?: (error: Error) => void
}

export interface CatGalleryRef {
  refresh: () => Promise<void>
}

export const CatGallery = forwardRef<CatGalleryRef, CatGalleryProps>(({
  count = 6,
  columns = 3,
  gap = 16,
  imageWidth = 200,
  imageHeight = 200,
  apiKey,
  className,
  style,
  onLoad,
  onError,
}, ref) => {
  const [images, setImages] = useState<CatImageData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const loadImages = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await fetchCatImages(count, apiKey)

      if (result.error || !result.data) {
        const err = result.error || new Error('Failed to load cat images')
        setError(err)
        onError?.(err)
      }
      else {
        setImages(result.data)
        onLoad?.(result.data)
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
  }, [count, apiKey, onLoad, onError])

  useImperativeHandle(ref, () => ({
    refresh: loadImages,
  }), [loadImages])

  useEffect(() => {
    if (isBrowser()) {
      loadImages()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
    ...style,
  }

  const imageContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageHeight,
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #e1e5e9',
    backgroundColor: '#f8f9fa',
  }

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
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

  const skeletonStyle: React.CSSProperties = {
    ...imageContainerStyle,
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'skeleton-loading 1.5s infinite',
  }

  if (loading) {
    return (
      <div className={className} style={containerStyle}>
        <style>
          {`
            @keyframes skeleton-loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}
        </style>
        {Array.from({ length: count }, (_, i) => `skeleton-${i}`).map(key => (
          <div key={key} style={skeletonStyle} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className={className} style={{ ...containerStyle, display: 'block' }}>
        <div style={errorStyle}>
          <span>Failed to load cat images</span>
          <button
            type="button"
            onClick={loadImages}
            style={{
              marginLeft: '8px',
              padding: '6px 12px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={className} style={containerStyle}>
      {images.map(image => (
        <div key={image.id} style={imageContainerStyle}>
          <img src={image.url} alt="Cat" style={imageStyle} />
        </div>
      ))}
    </div>
  )
})

CatGallery.displayName = 'CatGallery'
