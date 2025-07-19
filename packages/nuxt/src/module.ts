/**
 * Nuxt module for CAAC Cat Image component
 * Provides SSR-safe Cat Image component with auto-registration
 */

import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit';

export interface ModuleOptions {
  /**
   * Auto-register CatImage component globally
   * @default true
   */
  autoRegister?: boolean;
  /**
   * Component name for global registration
   * @default 'CatImage'
   */
  componentName?: string;
  /**
   * Default Cat API key for all components
   */
  defaultApiKey?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@caac/nuxt',
    configKey: 'catImage',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    autoRegister: true,
    componentName: 'CatImage'
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Add runtime configuration for API key
    if (options.defaultApiKey) {
      nuxt.options.runtimeConfig.public.catImageApiKey = options.defaultApiKey;
    }

    // Auto-register component globally if enabled
    if (options.autoRegister) {
      addComponent({
        name: options.componentName || 'CatImage',
        filePath: resolver.resolve('./runtime/CatImage.vue'),
        global: true
      });
    }

    // Add plugin for enhanced functionality
    addPlugin({
      src: resolver.resolve('./runtime/plugin.client.js'),
      mode: 'client'
    });

    // Add CSS for styling
    nuxt.options.css.push(resolver.resolve('./runtime/style.css'));
  }
});