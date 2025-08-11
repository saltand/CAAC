import type { Preview } from '@storybook/svelte';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      description: {
        component: 'Svelte 5 Cat Image Component for CAAC',
      },
    },
  },
};

export default preview;