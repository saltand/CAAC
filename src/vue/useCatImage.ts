import type { Ref } from 'vue'
import type { CatImageData } from '../shared'
import { onMounted, ref } from 'vue'
import { fetchCatImage, isBrowser } from '../shared'

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

// eslint-disable-next-line react-hooks-extra/no-unnecessary-use-prefix -- Vue composable naming convention
export function useCatImage(options: UseCatImageOptions = {}): UseCatImageReturn {
  const { apiKey, autoLoad = true } = options

  const imageUrl = ref<string>('')
  const imageData = ref<CatImageData | null>(null)
  const loading = ref(autoLoad)
  const error = ref<Error | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null

    try {
      const result = await fetchCatImage(apiKey)

      if (result.error || !result.data) {
        const err = result.error || new Error('Failed to load cat image')
        error.value = err
        imageUrl.value = ''
        imageData.value = null
      }
      else {
        imageUrl.value = result.data.url
        imageData.value = result.data
      }
    }
    catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error')
      error.value = errorObj
      imageUrl.value = ''
      imageData.value = null
    }
    finally {
      loading.value = false
    }
  }

  onMounted(() => {
    if (autoLoad && isBrowser()) {
      refresh()
    }
  })

  return {
    imageUrl,
    imageData,
    loading,
    error,
    refresh,
  }
}
