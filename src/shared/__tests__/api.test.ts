import { describe, expect, it, vi } from 'vitest'
import { fetchCatImage, fetchCatImages } from '../api'

describe('fetchCatImage', () => {
  it('should return cat image data on success', async () => {
    const mockData = [{
      id: 'abc123',
      url: 'https://example.com/cat.jpg',
      width: 500,
      height: 400,
    }]

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    const result = await fetchCatImage()

    expect(result.data).toEqual(mockData[0])
    expect(result.error).toBeNull()
    expect(result.loading).toBe(false)
  })

  it('should return error when fetch fails', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    })

    const result = await fetchCatImage()

    expect(result.data).toBeNull()
    expect(result.error).toBeInstanceOf(Error)
    expect(result.error?.message).toContain('500')
  })

  it('should return error when API returns empty array', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    const result = await fetchCatImage()

    expect(result.data).toBeNull()
    expect(result.error).toBeInstanceOf(Error)
    expect(result.error?.message).toContain('No cat image data')
  })

  it('should include API key in headers when provided', async () => {
    const mockData = [{
      id: 'abc123',
      url: 'https://example.com/cat.jpg',
      width: 500,
      height: 400,
    }]

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    await fetchCatImage('test-api-key')

    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: { 'x-api-key': 'test-api-key' },
      }),
    )
  })
})

describe('fetchCatImages', () => {
  it('should return multiple cat images on success', async () => {
    const mockData = [
      { id: 'abc1', url: 'https://example.com/cat1.jpg', width: 500, height: 400 },
      { id: 'abc2', url: 'https://example.com/cat2.jpg', width: 600, height: 500 },
      { id: 'abc3', url: 'https://example.com/cat3.jpg', width: 700, height: 600 },
    ]

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    const result = await fetchCatImages(3)

    expect(result.data).toEqual(mockData)
    expect(result.data?.length).toBe(3)
    expect(result.error).toBeNull()
  })

  it('should limit count to 100', async () => {
    const mockData = [{ id: 'abc1', url: 'https://example.com/cat1.jpg', width: 500, height: 400 }]

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    await fetchCatImages(200)

    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('limit=100'),
      expect.any(Object),
    )
  })

  it('should return error when fetch fails', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    const result = await fetchCatImages(5)

    expect(result.data).toBeNull()
    expect(result.error).toBeInstanceOf(Error)
    expect(result.error?.message).toBe('Network error')
  })
})
