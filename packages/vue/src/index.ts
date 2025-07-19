/**
 * @caac/vue - Vue 2/3 compatible Cat Image component
 */

import CatImage from './CatImage.vue';
import { useCatImage } from './composable';

// Export component
export { CatImage };
export default CatImage;

// Export composable
export { useCatImage };

// Export types from shared package
export type {
  CatImageProps,
  CatImageEvents,
  CatImageRef,
  CatImageData,
  CatImageState
} from '@caac/shared';

// Plugin for global registration
export const CatImagePlugin = {
  install(app: any) {
    app.component('CatImage', CatImage);
  }
};