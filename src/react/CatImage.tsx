'use client'

import React, { useState, useEffect } from 'react'
import { fetchCatImage, isBrowser } from '../shared'

// Simple props interface
interface CatImageProps {
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
}

export const CatImage: React.FC<CatImageProps> = ({ width = 300, height = 300, className, style }) => {
  // State management
  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean>(false)

  // Main function to fetch cat image
  const loadCatImage = async () => {
    setLoading(true)
    setError(false)

    try {
      const result = await fetchCatImage()

      if (result.error || !result.data) {
        setError(true)
      } else {
        setImageUrl(result.data.url)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  // Initialize on mount (SSR-safe)
  useEffect(() => {
    if (isBrowser()) {
      loadCatImage()
    }
  }, [])

  // Computed styles
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
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

  return (
    <div className={className} style={containerStyle}>
      {loading ? <div style={placeholderStyle}>Loading cat...</div> : error ? <div style={errorStyle}>Failed to load cat image</div> : <img src={imageUrl} alt="Random cat" style={imageStyle} />}
    </div>
  )
}

CatImage.displayName = 'CatImage'
