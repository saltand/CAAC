import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col">
      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="mb-6 text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CAAC
              </span>
            </h1>
            <p className="mb-4 text-xl text-gray-600 dark:text-gray-300">
              跨框架猫图组件库
            </p>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">
              简单易用的 Vue 和 React 猫咪图片展示组件，让你的应用瞬间变得可爱
            </p>
            
            <div className="flex justify-center gap-4">
              <Link 
                href="/docs"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                开始使用
              </Link>
              <Link 
                href="/docs/react/usage"
                className="rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                查看演示
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-3">🎨 跨框架支持</h3>
              <p className="text-gray-600 dark:text-gray-300">
                同时支持 Vue 和 React，使用相同的 API 和功能
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-3">🐱 随机猫图</h3>
              <p className="text-gray-600 dark:text-gray-300">
                使用 The Cat API 获取高质量的随机猫咪图片
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-3">⚡ 简单易用</h3>
              <p className="text-gray-600 dark:text-gray-300">
                开箱即用，支持加载状态和错误处理
              </p>
            </div>
          </div>

          {/* Quick Start */}
          <div className="text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">快速开始</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Vue</h3>
                <pre className="code-block text-sm">
{`npm install @caac/vue

import { CatImage } from '@caac/vue'

<CatImage :width="300" :height="300" />`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-3">React</h3>
                <pre className="code-block text-sm">
{`npm install @caac/react

import { CatImage } from '@caac/react'

<CatImage width={300} height={300} />`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          <p>Made with ❤️ for cat lovers everywhere</p>
        </div>
      </footer>
    </div>
  );
}