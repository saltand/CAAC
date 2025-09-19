/**
 * Core data models and type definitions for CAAC components
 */

export interface CatImageData {
  id: string
  url: string
  width: number
  height: number
}

export interface CatImageProps {
  width?: string | number
  height?: string | number
  placeholder?: string
  showSwitchButton?: boolean
  apiKey?: string
}

export interface CatImageEvents {
  onLoad?: (url: string) => void
  onError?: (error: Error) => void
  onChange?: (url: string) => void
}

export interface CatImageRef {
  change: () => Promise<void>
}

export interface CatApiResponse {
  data: CatImageData | null
  error: Error | null
  loading: boolean
}

export interface CatImageState {
  imageUrl: string
  loading: boolean
  error: string
}
