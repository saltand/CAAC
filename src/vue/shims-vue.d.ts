import type { DefineComponent, Ref } from 'vue'
import type { CatImageData } from '../shared'

declare module '*.vue' {
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}

declare module './CatImage.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<CatImageProps, CatImageExpose, CatImageEmits>
  export default component
}

declare module './CatGallery.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<CatGalleryProps, CatGalleryExpose, CatGalleryEmits>
  export default component
}

export interface CatImageProps {
  width?: number | string
  height?: number | string
  placeholder?: string
  showSwitchButton?: boolean
  apiKey?: string
}

export interface CatImageEmits {
  (e: 'load', url: string): void
  (e: 'error', error: Error): void
  (e: 'change', url: string): void
}

export interface CatImageExpose {
  change: () => Promise<void>
}

export interface CatGalleryProps {
  count?: number
  columns?: number
  gap?: number
  imageWidth?: number | string
  imageHeight?: number | string
  apiKey?: string
}

export interface CatGalleryEmits {
  (e: 'load', images: CatImageData[]): void
  (e: 'error', error: Error): void
}

export interface CatGalleryExpose {
  refresh: () => Promise<void>
}

export interface UseCatImageOptions {
  apiKey?: string
  autoLoad?: boolean
}

export interface UseCatImageReturn {
  imageUrl: Ref<string>
  imageData: Ref<CatImageData | null>
  loading: Ref<boolean>
  error: Ref<Error | null>
  refresh: () => Promise<void>
}
