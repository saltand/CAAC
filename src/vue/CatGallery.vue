<script setup lang="ts">
import type { CatImageData } from '../shared'
import { computed, onMounted, ref } from 'vue'
import { fetchCatImages, isBrowser } from '../shared'

interface Props {
  count?: number
  columns?: number
  gap?: number
  imageWidth?: number | string
  imageHeight?: number | string
  apiKey?: string
}

interface Emits {
  (e: 'load', images: CatImageData[]): void
  (e: 'error', error: Error): void
}

const props = withDefaults(defineProps<Props>(), {
  count: 6,
  columns: 3,
  gap: 16,
  imageWidth: 200,
  imageHeight: 200,
})

const emit = defineEmits<Emits>()

const images = ref<CatImageData[]>([])
const loading = ref(true)
const error = ref<Error | null>(null)

const normalizedImageWidth = computed(() =>
  typeof props.imageWidth === 'number' ? `${props.imageWidth}px` : props.imageWidth,
)

const normalizedImageHeight = computed(() =>
  typeof props.imageHeight === 'number' ? `${props.imageHeight}px` : props.imageHeight,
)

const containerStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
  gap: `${props.gap}px`,
}))

async function loadImages() {
  loading.value = true
  error.value = null

  try {
    const result = await fetchCatImages(props.count, props.apiKey)

    if (result.error || !result.data) {
      const err = result.error || new Error('Failed to load cat images')
      error.value = err
      emit('error', err)
    }
    else {
      images.value = result.data
      emit('load', result.data)
    }
  }
  catch (err) {
    const errorObj = err instanceof Error ? err : new Error('Unknown error')
    error.value = errorObj
    emit('error', errorObj)
  }
  finally {
    loading.value = false
  }
}

defineExpose({
  refresh: loadImages,
})

onMounted(() => {
  if (isBrowser()) {
    loadImages()
  }
})
</script>

<template>
  <div v-if="loading" :style="containerStyle">
    <div
      v-for="n in count"
      :key="`skeleton-${n}`"
      class="skeleton"
      :style="{
        width: normalizedImageWidth,
        height: normalizedImageHeight,
      }"
    />
  </div>
  <div v-else-if="error" class="error-container">
    <span>Failed to load cat images</span>
    <button type="button" class="retry-button" @click="loadImages">
      Retry
    </button>
  </div>
  <div v-else :style="containerStyle">
    <div
      v-for="image in images"
      :key="image.id"
      class="image-container"
      :style="{
        width: normalizedImageWidth,
        height: normalizedImageHeight,
      }"
    >
      <img :src="image.url" alt="Cat" class="image">
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e1e5e9;
  background-color: #f8f9fa;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.skeleton {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e1e5e9;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc3545;
  font-size: 14px;
  text-align: center;
  padding: 16px;
}

.retry-button {
  margin-left: 8px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;
}

.retry-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
