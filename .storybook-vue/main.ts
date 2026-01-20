import type { StorybookConfig } from '@storybook/vue3-vite'

import vue from '@vitejs/plugin-vue'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../stories/vue/**/*.mdx', '../stories/vue/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vue()],
    })
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
