import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'CAAC - Cat as a Component',
  brandUrl: 'https://github.com/your-username/caac',
  brandImage: undefined,
  brandTarget: '_self',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e1e5e9',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',

  // Text colors
  textColor: '#1a1a1a',
  textInverseColor: '#ffffff',
  textMutedColor: '#6c757d',

  // Toolbar default and active colors
  barTextColor: '#6c757d',
  barSelectedColor: '#007bff',
  barHoverColor: '#007bff',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e1e5e9',
  inputTextColor: '#1a1a1a',
  inputBorderRadius: 4,
});