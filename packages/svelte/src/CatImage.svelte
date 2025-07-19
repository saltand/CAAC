<script lang="ts">
  import { 
    fetchCatImage, 
    normalizeDimension, 
    isBrowser,
    type CatImageProps, 
    type CatImageEvents 
  } from '@caac/shared';

  // Svelte 5 props with destructuring and defaults
  let {
    width = 300,
    height = 300,
    placeholder = 'Loading cat...',
    showSwitchButton = false,
    apiKey,
    onLoad,
    onError,
    onChange
  }: CatImageProps & CatImageEvents = $props();

  // Svelte 5 reactive state with $state
  let imageUrl = $state('');
  let loading = $state(true);
  let error = $state('');

  // Computed properties using $derived
  let normalizedWidth = $derived(normalizeDimension(width));
  let normalizedHeight = $derived(normalizeDimension(height));

  // Image event handlers
  function handleImageLoad() {
    loading = false;
    onLoad?.(imageUrl);
  }

  function handleImageError() {
    const errorObj = new Error('Failed to load cat image');
    error = errorObj.message;
    loading = false;
    onError?.(errorObj);
  }

  // Main function to fetch and change cat image
  export async function change() {
    loading = true;
    error = '';
    
    try {
      const result = await fetchCatImage(apiKey);
      
      if (result.error) {
        error = result.error.message;
        onError?.(result.error);
      } else if (result.data) {
        imageUrl = result.data.url;
        onChange?.(result.data.url);
        // Note: onLoad will be triggered by the img element's load event
      }
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error');
      error = errorObj.message;
      onError?.(errorObj);
    } finally {
      loading = false;
    }
  }

  // SSR-safe initialization using $effect
  $effect(() => {
    if (isBrowser()) {
      change();
    }
  });
</script>

<div 
  class="container" 
  style:width={normalizedWidth}
  style:height={normalizedHeight}
>
  {#if loading}
    <div class="placeholder">
      {placeholder}
    </div>
  {:else if error}
    <div class="error">
      Error: {error}
    </div>
  {:else}
    <img
      src={imageUrl}
      alt="Random cat"
      class="image"
      on:load={handleImageLoad}
      on:error={handleImageError}
    />
  {/if}
  
  {#if showSwitchButton}
    <button
      class="switch-button"
      on:click={change}
      disabled={loading}
    >
      换猫
    </button>
  {/if}
</div>

<style>
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

  .switch-button {
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

  .switch-button:hover:not(:disabled) {
    background-color: #0056b3;
  }

  .switch-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>