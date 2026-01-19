/**
 * Cat API client for fetching random cat images
 */

import type { CatApiResponse, CatImageData } from './types'

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search'

export interface CatImagesApiResponse {
  data: CatImageData[] | null
  error: Error | null
  loading: boolean
}

/**
 * Fetches a random cat image from The Cat API
 *
 * @param apiKey - Optional API key for authentication
 * @returns Promise resolving to CatApiResponse with data, error, and loading state
 */
export async function fetchCatImage(apiKey?: string): Promise<CatApiResponse> {
  // Check if fetch is available (SSR compatibility)
  if (typeof fetch === 'undefined') {
    return {
      data: null,
      error: new Error('fetch is not available in this environment'),
      loading: false,
    }
  }

  try {
    const headers: Record<string, string> = {}

    // Add API key if provided
    if (apiKey) {
      headers['x-api-key'] = apiKey
    }

    const response = await fetch(CAT_API_URL, {
      method: 'GET',
      headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    // CRITICAL: Cat API returns array with single object
    const data = await response.json() as CatImageData[]

    if (!data || !Array.isArray(data) || data.length === 0) {
      throw new Error('No cat image data received from API')
    }

    const catData = data[0]

    // Validate required fields
    if (!catData.url || !catData.id) {
      throw new Error('Invalid cat image data received')
    }

    return {
      data: catData,
      error: null,
      loading: false,
    }
  }
  catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error('Unknown error occurred'),
      loading: false,
    }
  }
}

/**
 * Fetches multiple random cat images from The Cat API
 *
 * @param count - Number of images to fetch (default: 10, max: 100)
 * @param apiKey - Optional API key for authentication
 * @returns Promise resolving to CatImagesApiResponse with data array, error, and loading state
 */
export async function fetchCatImages(count = 10, apiKey?: string): Promise<CatImagesApiResponse> {
  if (typeof fetch === 'undefined') {
    return {
      data: null,
      error: new Error('fetch is not available in this environment'),
      loading: false,
    }
  }

  try {
    const headers: Record<string, string> = {}

    if (apiKey) {
      headers['x-api-key'] = apiKey
    }

    const url = `${CAT_API_URL}?limit=${Math.min(count, 100)}`
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json() as CatImageData[]

    if (!data || !Array.isArray(data) || data.length === 0) {
      throw new Error('No cat image data received from API')
    }

    return {
      data,
      error: null,
      loading: false,
    }
  }
  catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error('Unknown error occurred'),
      loading: false,
    }
  }
}
