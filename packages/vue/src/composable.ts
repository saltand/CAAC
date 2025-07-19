/**
 * Vue composable for cat image functionality
 * Provides reusable logic for cat image components
 */

import { ref, computed, onMounted } from 'vue';
import { fetchCatImage, normalizeDimension, isBrowser } from '@caac/shared';
import type { CatImageProps, CatImageEvents, CatImageState } from '@caac/shared';

export function useCatImage(props: CatImageProps & CatImageEvents) {
  // Reactive state
  const state = ref<CatImageState>({
    imageUrl: '',
    loading: true,
    error: ''
  });

  // Computed properties
  const normalizedWidth = computed(() => normalizeDimension(props.width));
  const normalizedHeight = computed(() => normalizeDimension(props.height));

  // Image event handlers
  const handleImageLoad = () => {
    state.value.loading = false;
    props.onLoad?.(state.value.imageUrl);
  };

  const handleImageError = () => {
    const errorObj = new Error('Failed to load cat image');
    state.value.error = errorObj.message;
    state.value.loading = false;
    props.onError?.(errorObj);
  };

  // Main function to fetch and change cat image
  const change = async () => {
    state.value.loading = true;
    state.value.error = '';
    
    try {
      const result = await fetchCatImage(props.apiKey);
      
      if (result.error) {
        state.value.error = result.error.message;
        props.onError?.(result.error);
      } else if (result.data) {
        state.value.imageUrl = result.data.url;
        props.onChange?.(result.data.url);
      }
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      state.value.error = errorObj.message;
      props.onError?.(errorObj);
    } finally {
      state.value.loading = false;
    }
  };

  // Initialize on mount (SSR-safe)
  onMounted(() => {
    if (isBrowser()) {
      change();
    }
  });

  return {
    state,
    normalizedWidth,
    normalizedHeight,
    handleImageLoad,
    handleImageError,
    change
  };
}