import type { DefineComponent } from 'vue'
import type { CatImageData } from '../shared'

export interface CatGalleryProps {
  count?: number
  columns?: number
  gap?: number
  imageWidth?: number | string
  imageHeight?: number | string
  apiKey?: string
}

export interface CatGalleryExpose {
  refresh: () => Promise<void>
}

export interface CatGalleryEmits {
  (e: 'load', images: CatImageData[]): void
  (e: 'error', error: Error): void
}

declare const CatGallery: DefineComponent<CatGalleryProps, CatGalleryExpose>
export default CatGallery
