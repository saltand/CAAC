export default function ReactInstallationPage() {
  return (
    <div className="prose max-w-none">
      <h1>React 安装指南</h1>
      
      <p>
        @caac/react 支持 React 16.8+ 版本，完全兼容 Next.js、Remix、Vite 等现代 React 框架。
      </p>

      <h2>系统要求</h2>
      <ul>
        <li><strong>React</strong>: 16.8.0+（需要 Hooks 支持）</li>
        <li><strong>React DOM</strong>: 16.8.0+</li>
        <li><strong>Node.js</strong>: 16.0.0+</li>
        <li><strong>包管理器</strong>: npm、yarn、或 pnpm</li>
      </ul>

      <h2>安装</h2>
      
      <h3>使用 npm</h3>
      <pre className="code-block">
{`npm install @caac/react`}
      </pre>

      <h3>使用 yarn</h3>
      <pre className="code-block">
{`yarn add @caac/react`}
      </pre>

      <h3>使用 pnpm</h3>
      <pre className="code-block">
{`pnpm add @caac/react`}
      </pre>

      <h2>基本导入</h2>
      <p>安装完成后，你就可以在 React 组件中导入和使用：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'

export default function App() {
  return (
    <div>
      <h1>我的应用</h1>
      <CatImage width={300} height={300} />
    </div>
  )
}`}
      </pre>

      <h2>框架集成</h2>

      <h3>Next.js</h3>
      <p>@caac/react 完全兼容 Next.js，包括 App Router 和 Pages Router。</p>

      <h4>App Router (推荐)</h4>
      <pre className="code-block">
{`// app/page.tsx
import { CatImage } from '@caac/react'

export default function HomePage() {
  return (
    <div>
      <h1>欢迎来到我的网站</h1>
      <CatImage width={400} height={300} />
    </div>
  )
}`}
      </pre>

      <h4>Pages Router</h4>
      <pre className="code-block">
{`// pages/index.tsx
import { CatImage } from '@caac/react'

export default function HomePage() {
  return (
    <div>
      <h1>欢迎来到我的网站</h1>
      <CatImage width={400} height={300} />
    </div>
  )
}`}
      </pre>

      <h3>Create React App</h3>
      <p>在 CRA 项目中直接使用，无需额外配置：</p>

      <pre className="code-block">
{`// src/App.js
import { CatImage } from '@caac/react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatImage width={300} height={300} />
      </header>
    </div>
  )
}

export default App`}
      </pre>

      <h3>Vite</h3>
      <p>完全兼容 Vite + React 项目：</p>

      <pre className="code-block">
{`// src/App.tsx
import { CatImage } from '@caac/react'

function App() {
  return (
    <div className="app">
      <CatImage width={350} height={350} />
    </div>
  )
}

export default App`}
      </pre>

      <h3>Remix</h3>
      <p>在 Remix 项目中使用，支持服务端渲染：</p>

      <pre className="code-block">
{`// app/routes/_index.tsx
import { CatImage } from '@caac/react'

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <CatImage width={300} height={300} />
    </div>
  )
}`}
      </pre>

      <h2>TypeScript 支持</h2>
      <p>@caac/react 完全支持 TypeScript，提供完整的类型定义：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'
import { useState } from 'react'

export default function TypeScriptExample() {
  const [size, setSize] = useState<number>(300)
  
  const handleSizeChange = (newSize: number): void => {
    setSize(newSize)
  }

  return (
    <div>
      <CatImage 
        width={size} 
        height={size}
        className="my-cat-image"
        style={{ borderRadius: '8px' }}
      />
      <button onClick={() => handleSizeChange(400)}>
        增大尺寸
      </button>
    </div>
  )
}`}
      </pre>

      <h2>ESLint 配置</h2>
      <p>如果你的项目使用 ESLint，可能需要添加以下配置来避免导入警告：</p>

      <pre className="code-block">
{`// .eslintrc.js
module.exports = {
  // ... 其他配置
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
}`}
      </pre>

      <h2>验证安装</h2>
      <p>创建一个简单的测试页面来验证安装：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'

export default function TestPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>CAAC React 组件测试</h1>
      <CatImage width={300} height={300} />
      <p>如果上方显示了猫咪图片，说明安装成功！</p>
    </div>
  )
}`}
      </pre>

      <h2>故障排除</h2>
      
      <div className="not-prose">
        <div className="bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ 常见问题</h4>
          <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-2">
            <li><strong>React 版本过低</strong>: 确保 React 版本 ≥ 16.8.0</li>
            <li><strong>TypeScript 错误</strong>: 确保安装了 @types/react 和 @types/react-dom</li>
            <li><strong>SSR 问题</strong>: 组件已经处理了 SSR 兼容性，无需额外配置</li>
          </ul>
        </div>
      </div>

      <div className="not-prose mt-8 p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
          🚀 下一步
        </h4>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          安装完成后，查看 <a href="/docs/react/usage" className="underline">使用方法</a> 了解详细的用法和实时演示。
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'React 安装指南',
  description: 'CAAC React 组件的详细安装指南'
};