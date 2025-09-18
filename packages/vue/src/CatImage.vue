<template>
  <div :class="$style.container" :style="{ width: normalizedWidth, height: normalizedHeight }">
    <div v-if="loading" :class="$style.placeholder">Loading cat...</div>
    <div v-else-if="error" :class="$style.error">Failed to load cat image</div>
    <img v-else :src="imageUrl" alt="Random cat" :class="$style.image" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { fetchCatImage, normalizeDimension, isBrowser } from '@caac/shared'

// Simple props interface
interface Props {
  width?: number | string
  height?: number | string
}

// Props with defaults
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
const loadCatImage = async () => {
  loading.value = true
  error.value = false

  try {
    const result = await fetchCatImage()

    if (result.error || !result.data) {
      error.value = true
    } else {
      imageUrl.value = result.data.url
    }
  } catch (err) {
    error.value = true
  } finally {
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

<style module>
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
