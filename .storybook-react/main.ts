import type { StorybookConfig } from '@storybook/react-vite'

import react from '@vitejs/plugin-react'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../stories/react/**/*.mdx', '../stories/react/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [react()],
    })
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
