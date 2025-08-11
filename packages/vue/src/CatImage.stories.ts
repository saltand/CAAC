import type { Meta, StoryObj } from '@storybook/vue3';
import CatImage from './CatImage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Vue/CatImage',
  component: CatImage,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
    docs: {
      description: {
        component: 'Vue 2/3 兼容的猫图组件，支持 SSR 和响应式尺寸调整。',
      },
    },
  },
  // This component will have an automatically generated docsPage entry
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 100, max: 800, step: 50 },
      description: '组件宽度（像素或字符串）',
      defaultValue: 300,
    },
    height: {
      control: { type: 'number', min: 100, max: 800, step: 50 },
      description: '组件高度（像素或字符串）',
      defaultValue: 300,
    },
    placeholder: {
      control: 'text',
      description: '加载时的占位文本',
      defaultValue: 'Loading cat...',
    },
    showSwitchButton: {
      control: 'boolean',
      description: '是否显示切换按钮',
      defaultValue: false,
    },
    apiKey: {
      control: 'text',
      description: '可选的 Cat API 密钥',
    },
    onLoad: {
      action: 'loaded',
      description: '图片加载成功时触发',
    },
    onError: {
      action: 'error',
      description: '加载失败时触发',
    },
    onChange: {
      action: 'changed',
      description: '切换图片成功时触发',
    },
  },
} satisfies Meta<typeof CatImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default: Story = {
  args: {
    width: 300,
    height: 300,
    placeholder: 'Loading cat...',
    showSwitchButton: false,
  },
};

export const WithButton: Story = {
  args: {
    width: 400,
    height: 400,
    placeholder: 'Loading adorable cat...',
    showSwitchButton: true,
  },
};

export const Small: Story = {
  args: {
    width: 150,
    height: 150,
    placeholder: 'Loading...',
    showSwitchButton: false,
  },
};

export const Large: Story = {
  args: {
    width: 600,
    height: 600,
    placeholder: 'Loading large cat image...',
    showSwitchButton: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    width: 300,
    height: 300,
    placeholder: '🐱 正在加载可爱的猫咪...',
    showSwitchButton: true,
  },
};

export const Square: Story = {
  args: {
    width: 350,
    height: 350,
    showSwitchButton: true,
  },
  parameters: {
    docs: {
      description: {
        story: '正方形尺寸的猫图组件',
      },
    },
  },
};

export const Rectangle: Story = {
  args: {
    width: 400,
    height: 250,
    showSwitchButton: true,
  },
  parameters: {
    docs: {
      description: {
        story: '矩形尺寸的猫图组件',
      },
    },
  },
};