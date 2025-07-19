/**
 * @caac/react - React Cat Image component (compatible with Next.js)
 */

export { CatImage } from './CatImage.js';
export { useCatImage, useCatImageDimensions } from './hooks.js';

// Export types from shared package
export type {
  CatImageProps,
  CatImageEvents,
  CatImageRef,
  CatImageData,
  CatImageState
} from '@caac/shared';

// Default export for convenience
export { CatImage as default } from './CatImage.js';