/**
 * @caac/shared - Core utilities and types for CAAC cross-framework components
 */

// Export all types
export type {
  CatImageData,
  CatImageProps,
  CatImageEvents,
  CatImageRef,
  CatApiResponse,
  CatImageState
} from './types';

// Export API functions
export { fetchCatImage } from './api';

// Export utility functions
export {
  isBrowser,
  isClient,
  normalizeDimension,
  generateId,
  getEnvVar,
  debounce
} from './utils';