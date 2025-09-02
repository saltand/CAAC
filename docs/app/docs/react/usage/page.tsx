import { BasicReactDemo, CustomSizeDemo, MultipleDemo, StyledDemo } from '@/components/demos/ReactDemo';

export default function ReactUsagePage() {
  return (
    <div className="prose max-w-none">
      <h1>React 使用方法</h1>
      
      <p>
        本页面详细介绍如何在 React 项目中使用 @caac/react 组件，包含实时可交互的演示。
      </p>

      <h2>基本用法</h2>
      <p>最简单的使用方式，组件会自动获取并显示一张随机猫咪图片：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'

export default function App() {
  return (
    <div>
      <CatImage />
    </div>
  )
}`}
      </pre>

      <div className="not-prose my-6">
        <BasicReactDemo />
      </div>

      <h2>自定义尺寸</h2>
      <p>通过 <code>width</code> 和 <code>height</code> props 来设置组件尺寸：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'

export default function CustomSizeExample() {
  return (
    <div>
      {/* 数字形式 */}
      <CatImage width={400} height={300} />
      
      {/* 字符串形式 */}
      <CatImage width="100%" height="200px" />
    </div>
  )
}`}
      </pre>

      <div className="not-prose my-6">
        <CustomSizeDemo />
      </div>

      <h2>响应式设计</h2>
      <p>结合 React Hooks 实现响应式设计：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'
import { useState, useEffect } from 'react'

export default function ResponsiveExample() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className="container">
      <CatImage 
        width={isMobile ? 250 : 400} 
        height={isMobile ? 200 : 300} 
      />
    </div>
  )
}`}
      </pre>

      <h2>多个组件</h2>
      <p>在同一页面使用多个组件，每个都会显示不同的猫咪图片：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'

export default function GalleryExample() {
  const cats = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="cat-gallery">
      {cats.map((i) => (
        <CatImage 
          key={i}
          width={200} 
          height={200} 
          className="cat-item"
        />
      ))}
    </div>
  )
}`}
      </pre>

      <div className="not-prose my-6">
        <MultipleDemo />
      </div>

      <h2>状态管理</h2>
      <p>结合 React 状态管理来控制组件行为：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'
import { useState } from 'react'

export default function StateExample() {
  const [size, setSize] = useState(300)
  const [isLarge, setIsLarge] = useState(false)

  const toggleSize = () => {
    setIsLarge(!isLarge)
    setSize(isLarge ? 300 : 450)
  }

  return (
    <div>
      <CatImage 
        width={size} 
        height={size}
        className={isLarge ? 'large-cat' : 'normal-cat'}
      />
      <button onClick={toggleSize}>
        {isLarge ? '缩小' : '放大'}
      </button>
    </div>
  )
}`}
      </pre>

      <h2>自定义样式</h2>
      <p>通过 <code>className</code> 和 <code>style</code> props 自定义样式：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'
import { useState } from 'react'

export default function StyledExample() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={\`custom-container \${hovered ? 'hovered' : ''}\`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CatImage 
        width={300} 
        height={300}
        style={{ 
          borderRadius: '12px',
          transition: 'transform 0.3s ease'
        }}
      />
    </div>
  )
}`}
      </pre>

      <div className="not-prose my-6">
        <StyledDemo />
      </div>

      <h2>在 Hook 中使用</h2>
      <p>创建自定义 Hook 来管理猫咪图片的状态：</p>

      <pre className="code-block">
{`import { useState, useCallback } from 'react'

// 自定义 Hook
function useCatGallery(initialCount = 3) {
  const [count, setCount] = useState(initialCount)
  const [key, setKey] = useState(0)

  const addCat = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const removeCat = useCallback(() => {
    setCount(prev => Math.max(1, prev - 1))
  }, [])

  const refreshGallery = useCallback(() => {
    setKey(prev => prev + 1)
  }, [])

  return {
    count,
    key,
    addCat,
    removeCat,
    refreshGallery
  }
}

// 使用自定义 Hook
export default function HookExample() {
  const { count, key, addCat, removeCat, refreshGallery } = useCatGallery(3)

  return (
    <div>
      <div className="controls">
        <button onClick={addCat}>添加猫咪</button>
        <button onClick={removeCat}>移除猫咪</button>
        <button onClick={refreshGallery}>刷新画廊</button>
      </div>
      
      <div className="gallery" key={key}>
        {Array.from({ length: count }, (_, i) => (
          <CatImage key={i} width={150} height={150} />
        ))}
      </div>
    </div>
  )
}`}
      </pre>

      <h2>TypeScript 用法</h2>
      <p>完整的 TypeScript 类型支持：</p>

      <pre className="code-block">
{`import { CatImage } from '@caac/react'
import { CSSProperties, FC, useState } from 'react'

interface CatDisplayProps {
  title: string
  initialSize?: number
}

const CatDisplay: FC<CatDisplayProps> = ({ 
  title, 
  initialSize = 300 
}) => {
  const [size, setSize] = useState<number>(initialSize)
  const [customStyle, setCustomStyle] = useState<CSSProperties>({
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  })

  const handleSizeChange = (newSize: number): void => {
    setSize(newSize)
  }

  return (
    <div>
      <h3>{title}</h3>
      <CatImage 
        width={size} 
        height={size}
        style={customStyle}
        className="typescript-cat"
      />
      <input 
        type="range" 
        min={200} 
        max={500} 
        value={size}
        onChange={(e) => handleSizeChange(Number(e.target.value))}
      />
    </div>
  )
}

export default CatDisplay`}
      </pre>

      <h2>Next.js 特殊用法</h2>

      <h3>App Router</h3>
      <pre className="code-block">
{`// app/cats/page.tsx
import { CatImage } from '@caac/react'

export default function CatsPage() {
  return (
    <div>
      <h1>猫咪画廊</h1>
      <div className="grid grid-cols-2 gap-4">
        <CatImage width={250} height={250} />
        <CatImage width={250} height={250} />
      </div>
    </div>
  )
}

export const metadata = {
  title: '猫咪画廊',
  description: '可爱的随机猫咪图片'
}`}
      </pre>

      <h3>客户端组件</h3>
      <pre className="code-block">
{`'use client'

import { CatImage } from '@caac/react'
import { useState } from 'react'

export default function InteractiveCats() {
  const [refresh, setRefresh] = useState(0)

  return (
    <div>
      <button onClick={() => setRefresh(refresh + 1)}>
        刷新猫咪
      </button>
      <CatImage key={refresh} width={300} height={300} />
    </div>
  )
}`}
      </pre>

      <h2>最佳实践</h2>
      
      <div className="not-prose">
        <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ 推荐做法</h4>
          <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
            <li>• 为动态列表中的组件设置稳定的 key</li>
            <li>• 使用 useCallback 优化事件处理函数</li>
            <li>• 合理设置组件尺寸，考虑响应式设计</li>
            <li>• 在生产环境中考虑图片加载的用户体验</li>
            <li>• 使用 TypeScript 获得更好的开发体验</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">❌ 避免做法</h4>
          <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
            <li>• 避免在短时间内创建大量组件实例</li>
            <li>• 不要在 useEffect 的依赖数组中遗漏必要的依赖</li>
            <li>• 不要忘记为异步操作添加错误处理</li>
            <li>• 避免设置过小的尺寸影响图片质量</li>
          </ul>
        </div>
      </div>

      <div className="not-prose mt-8 p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
          📖 相关文档
        </h4>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          查看 <a href="/docs/api" className="underline">API 参考</a> 了解完整的组件属性、类型定义和事件处理。
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'React 使用方法',
  description: 'CAAC React 组件的详细使用指南和实时演示'
};