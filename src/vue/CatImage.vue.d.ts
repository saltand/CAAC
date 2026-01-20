import type { DefineComponent } from 'vue'

export interface CatImageProps {
  width?: number | string
  height?: number | string
  placeholder?: string
  showSwitchButton?: boolean
  apiKey?: string
}

export interface CatImageExpose {
  change: () => Promise<void>
}

declare const CatImage: DefineComponent<CatImageProps, CatImageExpose>
export default CatImage
