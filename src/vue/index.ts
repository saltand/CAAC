/**
 * caac/vue - Vue Cat Image component
 */

import CatGallery from './CatGallery.vue'
import CatImage from './CatImage.vue'

// Export components
export { CatGallery, CatImage }
export default CatImage

// Export types from shared package
export type {
  CatImageData,
} from '../shared'

// Export composable and types
export { useCatImage } from './useCatImage'
export type { UseCatImageOptions, UseCatImageReturn } from './useCatImage'
