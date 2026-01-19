'use client'

import type { CatImageData } from '../shared'
import { useCallback, useEffect, useState } from 'react'
import { fetchCatImage, isBrowser } from '../shared'

export interface UseCatImageOptions {
  apiKey?: string
  autoLoad?: boolean
}

export interface UseCatImageReturn {
  imageUrl: string
  imageData: CatImageData | null
  loading: boolean
  error: Error | null
  refresh: () => Promise<void>
}

export function useCatImage(options: UseCatImageOptions = {}): UseCatImageReturn {
  const { apiKey, autoLoad = true } = options

  const [imageUrl, setImageUrl] = useState<string>('')
  const [imageData, setImageData] = useState<CatImageData | null>(null)
  const [loading, setLoading] = useState(autoLoad)
  const [error, setError] = useState<Error | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await fetchCatImage(apiKey)

      if (result.error || !result.data) {
        const err = result.error || new Error('Failed to load cat image')
        setError(err)
        setImageUrl('')
        setImageData(null)
      }
      else {
        setImageUrl(result.data.url)
        setImageData(result.data)
      }
    }
    catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')
      setError(error)
      setImageUrl('')
      setImageData(null)
    }
    finally {
      setLoading(false)
    }
  }, [apiKey])

  useEffect(() => {
    if (autoLoad && isBrowser()) {
      refresh()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    imageUrl,
    imageData,
    loading,
    error,
    refresh,
  }
}
