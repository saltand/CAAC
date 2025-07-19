<template>
  <div 
    :class="$style.container" 
    :style="{ width: normalizedWidth, height: normalizedHeight }"
  >
    <div v-if="loading" :class="$style.placeholder">
      {{ placeholder }}
    </div>
    <div v-else-if="error" :class="$style.error">
      Error: {{ error }}
    </div>
    <img
      v-else
      :src="imageUrl"
      alt="Random cat"
      :class="$style.image"
      @load="handleImageLoad"
      @error="handleImageError"
    />
    
    <button
      v-if="showSwitchButton"
      :class="$style.switchButton"
      @click="change"
      :disabled="loading"
    >
      换猫
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { fetchCatImage, normalizeDimension, isBrowser } from '@caac/shared';
import type { CatImageProps, CatImageEvents } from '@caac/shared';

// Props with defaults
const props = withDefaults(defineProps<CatImageProps & CatImageEvents>(), {
  width: 300,
  height: 300,
  placeholder: 'Loading cat...',
  showSwitchButton: false
});

// Reactive state
const imageUrl = ref<string>('');
const loading = ref(true);
const error = ref<string>('');

// Computed properties for normalized dimensions
const normalizedWidth = computed(() => normalizeDimension(props.width));
const normalizedHeight = computed(() => normalizeDimension(props.height));

// Image event handlers
const handleImageLoad = () => {
  loading.value = false;
  props.onLoad?.(imageUrl.value);
};

const handleImageError = () => {
  const errorObj = new Error('Failed to load cat image');
  error.value = errorObj.message;
  loading.value = false;
  props.onError?.(errorObj);
};

// Main function to fetch and change cat image
const change = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    const result = await fetchCatImage(props.apiKey);
    
    if (result.error) {
      error.value = result.error.message;
      props.onError?.(result.error);
    } else if (result.data) {
      imageUrl.value = result.data.url;
      props.onChange?.(result.data.url);
      // Note: onLoad will be triggered by the img element's load event
    }
  } catch (err) {
    const errorObj = err instanceof Error ? err : new Error('Unknown error');
    error.value = errorObj.message;
    props.onError?.(errorObj);
  } finally {
    loading.value = false;
  }
};

// Expose methods for parent component access
defineExpose({ change });

// Initialize on mount (SSR-safe)
onMounted(() => {
  if (isBrowser()) {
    change();
  }
});
</script>

<style module>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
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

.switchButton {
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;
}

.switchButton:hover:not(:disabled) {
  background-color: #0056b3;
}

.switchButton:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>