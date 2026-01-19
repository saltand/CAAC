<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { fetchCatImage, isBrowser, normalizeDimension } from '../shared'

interface Props {
  width?: number | string
  height?: number | string
  placeholder?: string
  showSwitchButton?: boolean
  apiKey?: string
}

interface Emits {
  (e: 'load', url: string): void
  (e: 'error', error: Error): void
  (e: 'change', url: string): void
}

const props = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 300,
  placeholder: 'Loading cat...',
  showSwitchButton: false,
})

const emit = defineEmits<Emits>()

const imageUrl = ref<string>('')
const loading = ref(true)
const error = ref<Error | null>(null)
const isFirstLoad = ref(true)

const normalizedWidth = computed(() => normalizeDimension(props.width))
const normalizedHeight = computed(() => normalizeDimension(props.height))

async function loadCatImage() {
  loading.value = true
  error.value = null

  try {
    const result = await fetchCatImage(props.apiKey)

    if (result.error || !result.data) {
      const err = result.error || new Error('Failed to load cat image')
      error.value = err
      emit('error', err)
    }
    else {
      const url = result.data.url
      imageUrl.value = url
      emit('load', url)
      if (!isFirstLoad.value) {
        emit('change', url)
      }
      isFirstLoad.value = false
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
  change: loadCatImage,
})

onMounted(() => {
  if (isBrowser()) {
    loadCatImage()
  }
})
</script>

<template>
  <div class="wrapper">
    <div
      class="container"
      :style="{
        width: normalizedWidth,
        height: normalizedHeight,
      }"
    >
      <div v-if="loading" class="placeholder">
        {{ placeholder }}
      </div>
      <div v-else-if="error" class="error">
        <span>Failed to load cat image</span>
        <button type="button" class="retry-button" @click="loadCatImage">
          Retry
        </button>
      </div>
      <img
        v-else
        :src="imageUrl"
        alt="Random cat"
        class="image"
        @click="loadCatImage"
      >
    </div>
    <button
      v-if="showSwitchButton && !loading && !error"
      type="button"
      class="switch-button"
      @click="loadCatImage"
    >
      Switch Cat
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: inline-block;
}

.container {
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
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.image:hover {
  opacity: 0.8;
}

.placeholder,
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #6c757d;
  font-size: 14px;
  text-align: center;
  padding: 16px;
}

.error {
  color: #dc3545;
  flex-direction: column;
  gap: 8px;
}

.switch-button {
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;
}

.switch-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.retry-button {
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
