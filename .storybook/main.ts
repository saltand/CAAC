import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use pnpm workspaces.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../packages/docs/**/*.mdx',
    '../packages/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/react/src/**/*.mdx',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  refs: {
    vue: {
      title: 'Vue Components',
      url: 'http://localhost:6007',
    },
    svelte: {
      title: 'Svelte Components',
      url: 'http://localhost:6008',
    },
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@caac/shared': join(__dirname, '../packages/shared/src'),
          '@caac/react': join(__dirname, '../packages/react/src'),
        },
      },
    };
  },
};

export default config;