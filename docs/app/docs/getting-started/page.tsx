import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <div className="prose max-w-none">
      <h1>快速开始</h1>
      
      <p>
        CAAC 是一个跨框架的猫咪图片展示组件库，支持 Vue 和 React。
        本指南将帮助你在几分钟内将可爱的猫咪图片集成到你的项目中。
      </p>

      <h2>选择你的框架</h2>
      <div className="not-prose grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-green-200 dark:border-green-800 p-6 bg-green-50 dark:bg-green-950/50">
          <h3 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">
            💚 Vue
          </h3>
          <p className="text-sm text-green-700 dark:text-green-400 mb-4">
            适用于 Vue 2.7+ 和 Vue 3.x 项目
          </p>
          <pre className="code-block text-sm mb-4">
{`npm install @caac/vue`}
          </pre>
          <Link 
            href="/docs/vue/installation"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Vue 详细指南 →
          </Link>
        </div>

        <div className="rounded-lg border border-blue-200 dark:border-blue-800 p-6 bg-blue-50 dark:bg-blue-950/50">
          <h3 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300">
            ⚛️ React
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-400 mb-4">
            适用于 React 16.8+ 项目，支持 Next.js
          </p>
          <pre className="code-block text-sm mb-4">
{`npm install @caac/react`}
          </pre>
          <Link 
            href="/docs/react/installation"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            React 详细指南 →
          </Link>
        </div>
      </div>

      <h2>基本使用</h2>
      
      <h3>Vue 示例</h3>
      <pre className="code-block">
{`<template>
  <div>
    <h1>我的应用</h1>
    <!-- 基本用法 -->
    <CatImage />
    
    <!-- 自定义尺寸 -->
    <CatImage :width="400" :height="300" />
  </div>
</template>

<script setup>
import { CatImage } from '@caac/vue'
</script>`}
      </pre>

      <h3>React 示例</h3>
      <pre className="code-block">
{`import { CatImage } from '@caac/react'

export default function App() {
  return (
    <div>
      <h1>我的应用</h1>
      {/* 基本用法 */}
      <CatImage />
      
      {/* 自定义尺寸 */}
      <CatImage width={400} height={300} />
    </div>
  )
}`}
      </pre>

      <h2>主要特性</h2>
      <div className="not-prose">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">🎯 自动加载</h4>
            <p className="text-sm text-muted-foreground">
              组件自动从 The Cat API 获取随机猫咪图片，无需手动请求
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">⏳ 状态管理</h4>
            <p className="text-sm text-muted-foreground">
              内置加载状态和错误处理，提供友好的用户体验
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">🔧 可配置</h4>
            <p className="text-sm text-muted-foreground">
              支持自定义宽度、高度等属性，灵活适应不同场景
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">🌐 SSR 支持</h4>
            <p className="text-sm text-muted-foreground">
              完全支持服务端渲染，适用于 Nuxt.js、Next.js 等框架
            </p>
          </div>
        </div>
      </div>

      <h2>下一步</h2>
      <p>选择你使用的框架，查看详细的安装和使用指南：</p>
      
      <div className="not-prose flex gap-4 mt-4">
        <Link 
          href="/docs/vue/installation"
          className="flex-1 p-4 border rounded-lg hover:border-green-500 transition-colors"
        >
          <div className="font-semibold text-green-600">Vue 指南</div>
          <div className="text-sm text-muted-foreground">Vue 2.7+ / 3.x 详细使用方法</div>
        </Link>
        
        <Link 
          href="/docs/react/installation"
          className="flex-1 p-4 border rounded-lg hover:border-blue-500 transition-colors"
        >
          <div className="font-semibold text-blue-600">React 指南</div>
          <div className="text-sm text-muted-foreground">React 16.8+ 详细使用方法和演示</div>
        </Link>
      </div>

      <div className="not-prose mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
          💡 提示
        </h4>
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          所有组件都使用相同的 <a href="/docs/api" className="underline">API</a>，
          在不同框架间切换时可以保持一致的使用体验。
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: '快速开始',
  description: 'CAAC 跨框架猫图组件库快速开始指南'
};