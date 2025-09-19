/**
 * @caac/shared - Core utilities and types for CAAC cross-framework components
 */

// Export API functions
export { fetchCatImage } from './api'

// Export all types
export type {
  CatApiResponse,
  CatImageData,
  CatImageEvents,
  CatImageProps,
  CatImageRef,
  CatImageState,
} from './types'

// Export utility functions
export {
  debounce,
  generateId,
  getEnvVar,
  isBrowser,
  isClient,
  normalizeDimension,
} from './utils'
