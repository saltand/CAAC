<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { fetchCatImage, isBrowser, normalizeDimension } from '../shared'

interface Props {
  width?: number | string
  height?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 300,
})

// Reactive state
const imageUrl = ref<string>('')
const loading = ref(true)
const error = ref<boolean>(false)

// Computed properties for normalized dimensions
const normalizedWidth = computed(() => normalizeDimension(props.width))
const normalizedHeight = computed(() => normalizeDimension(props.height))

// Main function to fetch cat image
async function loadCatImage() {
  loading.value = true
  error.value = false

  try {
    const result = await fetchCatImage()

    if (result.error || !result.data) {
      error.value = true
    }
    else {
      imageUrl.value = result.data.url
    }
  }
  catch {
    error.value = true
  }
  finally {
    loading.value = false
  }
}

// Initialize on mount (SSR-safe)
onMounted(() => {
  if (isBrowser()) {
    loadCatImage()
  }
})
</script>

<template>
  <div
    class="container"
    :style="{
      width: normalizedWidth,
      height: normalizedHeight,
    }"
  >
    <div v-if="loading" class="placeholder">
      Loading cat...
    </div>
    <div v-else-if="error" class="error">
      Failed to load cat image
    </div>
    <img
      v-else
      :src="imageUrl"
      alt="Random cat"
      class="image"
      @click="loadCatImage"
    >
  </div>
</template>

<style scoped>
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
}
</style>
