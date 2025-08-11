import type { Meta, StoryObj } from '@storybook/react';
import { CatImage } from './CatImage';

const meta = {
  title: 'Showcase/All Frameworks Comparison',
  component: CatImage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '展示 CAAC 组件在不同框架中的一致性表现',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CatImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FrameworkComparison: Story = {
  render: () => {
    return (
      <div style={{ padding: '32px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>
          CAAC - 跨框架猫图组件对比
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '16px' }}>React 组件</h3>
            <CatImage width={280} height={280} showSwitchButton />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px' }}>Vue 组件</h3>
            <div style={{
              width: '280px',
              height: '280px',
              margin: '0 auto',
              border: '2px dashed #e1e5e9',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6c757d',
              fontSize: '14px',
              padding: '16px',
              textAlign: 'center'
            }}>
              Vue 组件请在单独的 Vue Storybook 中查看
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '16px' }}>Svelte 组件</h3>
            <div style={{
              width: '280px',
              height: '280px',
              margin: '0 auto',
              border: '2px dashed #e1e5e9',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6c757d',
              fontSize: '14px',
              padding: '16px',
              textAlign: 'center'
            }}>
              Svelte 组件请在单独的 Svelte Storybook 中查看
            </div>
          </div>
        </div>
        
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '24px',
          borderRadius: '8px',
          marginTop: '32px'
        }}>
          <h3 style={{ marginBottom: '16px' }}>🎯 核心特性对比</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <strong>✅ 统一 API</strong>
              <p style={{ margin: '8px 0', fontSize: '14px', color: '#6c757d' }}>
                所有框架使用相同的 props 和事件
              </p>
            </div>
            <div>
              <strong>⚡ SSR 支持</strong>
              <p style={{ margin: '8px 0', fontSize: '14px', color: '#6c757d' }}>
                Next.js 和 Nuxt 完全兼容
              </p>
            </div>
            <div>
              <strong>🎨 样式一致</strong>
              <p style={{ margin: '8px 0', fontSize: '14px', color: '#6c757d' }}>
                相同的视觉效果和交互体验
              </p>
            </div>
            <div>
              <strong>📦 轻量级</strong>
              <p style={{ margin: '8px 0', fontSize: '14px', color: '#6c757d' }}>
                共享核心逻辑，最小化包体积
              </p>
            </div>
          </div>
        </div>
        
        <div style={{
          marginTop: '32px',
          padding: '24px',
          backgroundColor: '#e8f4fd',
          borderRadius: '8px',
          border: '1px solid #bee5eb'
        }}>
          <h4 style={{ marginBottom: '12px' }}>💡 提示</h4>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6 }}>
            要查看完整的多框架支持，您可以：
          </p>
          <ul style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.8 }}>
            <li>为每个框架运行独立的 Storybook 实例</li>
            <li>使用 Storybook Composition 功能组合多个 Storybook</li>
            <li>在实际项目中集成并测试各框架组件</li>
          </ul>
        </div>
      </div>
    );
  },
};