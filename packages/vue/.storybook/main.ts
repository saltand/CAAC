import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx|vue)'
  ],
  addons: [
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vue()]
    });
  },
  docs: {
    autodocs: 'tag'
  }
};

export default config;
