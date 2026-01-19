import { describe, expect, it } from 'vitest'
import { debounce, generateId, normalizeDimension } from '../utils'

describe('normalizeDimension', () => {
  it('should return "auto" for undefined', () => {
    expect(normalizeDimension(undefined)).toBe('auto')
  })

  it('should add "px" suffix for numbers', () => {
    expect(normalizeDimension(100)).toBe('100px')
    expect(normalizeDimension(0)).toBe('0px')
    expect(normalizeDimension(50.5)).toBe('50.5px')
  })

  it('should return string values as-is', () => {
    expect(normalizeDimension('100%')).toBe('100%')
    expect(normalizeDimension('50vw')).toBe('50vw')
    expect(normalizeDimension('auto')).toBe('auto')
  })
})

describe('generateId', () => {
  it('should generate unique IDs', () => {
    const id1 = generateId()
    const id2 = generateId()
    expect(id1).not.toBe(id2)
  })

  it('should use default prefix "caac"', () => {
    const id = generateId()
    expect(id.startsWith('caac-')).toBe(true)
  })

  it('should use custom prefix when provided', () => {
    const id = generateId('custom')
    expect(id.startsWith('custom-')).toBe(true)
  })
})

describe('debounce', () => {
  it('should debounce function calls', async () => {
    let callCount = 0
    const fn = () => {
      callCount++
    }
    const debouncedFn = debounce(fn, 50)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    expect(callCount).toBe(0)

    await new Promise(resolve => setTimeout(resolve, 100))

    expect(callCount).toBe(1)
  })

  it('should pass arguments to the debounced function', async () => {
    let receivedArgs: number[] = []
    const fn = (...args: number[]) => {
      receivedArgs = args
    }
    const debouncedFn = debounce(fn, 50)

    debouncedFn(1, 2, 3)

    await new Promise(resolve => setTimeout(resolve, 100))

    expect(receivedArgs).toEqual([1, 2, 3])
  })
})
