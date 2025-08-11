import type { Meta, StoryObj } from '@storybook/react';
import { CatImage } from './CatImage';
import { useRef } from 'react';
import type { CatImageRef } from '@caac/shared';

const meta = {
  title: 'Components/React/CatImage',
  component: CatImage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'React 猫图组件，支持 Next.js SSR 和命令式 API 调用。',
      },
    },
  },
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
    className: {
      control: 'text',
      description: '自定义 CSS 类名',
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

export const WithCustomStyle: Story = {
  args: {
    width: 350,
    height: 350,
    showSwitchButton: true,
    style: {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '使用自定义样式的猫图组件',
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

// Interactive story with imperative API demonstration
export const ImperativeAPI: Story = {
  render: (args) => {
    const Component = () => {
      const catImageRef = useRef<CatImageRef>(null);

      const handleExternalChange = () => {
        catImageRef.current?.change();
      };

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <CatImage {...args} ref={catImageRef} />
          <button
            onClick={handleExternalChange}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            通过 Ref 切换猫图
          </button>
        </div>
      );
    };

    return <Component />;
  },
  args: {
    width: 350,
    height: 350,
    showSwitchButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: '演示如何通过 ref 使用命令式 API 来控制组件',
      },
    },
  },
};