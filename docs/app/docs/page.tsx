import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="prose max-w-none">
      <h1>CAAC 跨框架猫图组件库</h1>
      
      <p className="text-lg text-muted-foreground">
        CAAC (Cross-framework Auto Cat API Component) 是一个简单易用的跨框架猫咪图片展示组件库，
        同时支持 Vue 和 React 框架。
      </p>

      <div className="not-prose grid gap-4 md:grid-cols-2 mt-8">
        <Link 
          href="/docs/getting-started"
          className="group rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
            🚀 快速开始
          </h3>
          <p className="text-sm text-muted-foreground">
            了解如何在你的项目中快速集成 CAAC 组件
          </p>
        </Link>

        <Link 
          href="/docs/vue/installation"
          className="group rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
            💚 Vue 指南
          </h3>
          <p className="text-sm text-muted-foreground">
            Vue 版本的详细安装和使用指南
          </p>
        </Link>

        <Link 
          href="/docs/react/installation"
          className="group rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
            ⚛️ React 指南
          </h3>
          <p className="text-sm text-muted-foreground">
            React 版本的详细安装和使用指南，包含实时演示
          </p>
        </Link>

        <Link 
          href="/docs/api"
          className="group rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
            📚 API 参考
          </h3>
          <p className="text-sm text-muted-foreground">
            完整的组件 API 和类型定义参考
          </p>
        </Link>
      </div>

      <h2>特性</h2>
      <ul>
        <li><strong>跨框架支持</strong>：同时支持 Vue 和 React，API 一致</li>
        <li><strong>随机猫图</strong>：使用 The Cat API 获取高质量猫咪图片</li>
        <li><strong>开箱即用</strong>：无需额外配置，支持 SSR</li>
        <li><strong>状态处理</strong>：内置加载状态和错误处理</li>
        <li><strong>TypeScript</strong>：完整的类型支持</li>
      </ul>

      <h2>快速预览</h2>
      <div className="grid md:grid-cols-2 gap-4 not-prose">
        <div>
          <h3 className="font-semibold mb-2">Vue</h3>
          <pre className="code-block text-sm">
{`<template>
  <CatImage :width="300" :height="300" />
</template>

<script setup>
import { CatImage } from '@caac/vue'
</script>`}
          </pre>
        </div>
        <div>
          <h3 className="font-semibold mb-2">React</h3>
          <pre className="code-block text-sm">
{`import { CatImage } from '@caac/react'

export default function App() {
  return <CatImage width={300} height={300} />
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}