/**
 * @caac/svelte - Svelte 5 Cat Image component
 */

import CatImage from './CatImage.svelte';

// Export component
export { CatImage };
export default CatImage;

// Export types from shared package
export type {
  CatImageProps,
  CatImageEvents,
  CatImageRef,
  CatImageData,
  CatImageState
} from '@caac/shared';