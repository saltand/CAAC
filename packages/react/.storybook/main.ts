import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [react()]
    });
  },
  docs: {
    autodocs: 'tag'
  }
};

export default config;
