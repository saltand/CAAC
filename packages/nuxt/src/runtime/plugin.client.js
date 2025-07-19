/**
 * Client-side plugin for enhanced Cat Image functionality
 * Provides utilities and global configuration for CAAC components
 */

export default defineNuxtPlugin(() => {
  // Global utilities for cat image components
  const catImageUtils = {
    /**
     * Preload cat images for better performance
     */
    preloadImages: async (count = 3) => {
      const { fetchCatImage } = await import('@caac/shared');
      const promises = Array.from({ length: count }, () => fetchCatImage());
      return Promise.allSettled(promises);
    },
    
    /**
     * Get random cat image URL directly
     */
    getRandomCatUrl: async (apiKey) => {
      const { fetchCatImage } = await import('@caac/shared');
      const result = await fetchCatImage(apiKey);
      return result.data?.url || null;
    }
  };

  // Provide utilities globally
  return {
    provide: {
      catImageUtils
    }
  };
});