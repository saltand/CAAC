export default function ApiPage() {
  return (
    <div className="prose max-w-none">
      <h1>API 参考</h1>
      
      <p>
        本页面提供 @caac/react 和 @caac/vue 组件的完整 API 参考文档，包括属性、类型定义和事件处理。
      </p>

      <h2>React 组件 API</h2>
      
      <h3>CatImage 组件</h3>
      <p>主要的猫咪图片组件，支持自定义尺寸和样式。</p>

      <h4>Props</h4>
      <div className="not-prose overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">属性名</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">类型</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">默认值</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">width</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">number | string</td>
              <td className="border border-gray-300 px-4 py-2">300</td>
              <td className="border border-gray-300 px-4 py-2">图片宽度，可以是数字（像素）或字符串（如 "100%"）</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">height</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">number | string</td>
              <td className="border border-gray-300 px-4 py-2">300</td>
              <td className="border border-gray-300 px-4 py-2">图片高度，可以是数字（像素）或字符串（如 "200px"）</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">className</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">string</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">额外的 CSS 类名</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">style</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">CSSProperties</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">内联样式对象</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>TypeScript 类型定义</h4>
      <pre className="code-block">
{`interface CatImageProps {
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
}

declare const CatImage: React.FC<CatImageProps>`}
      </pre>

      <h4>事件回调</h4>
      <div className="not-prose overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">事件名</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">类型</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">onLoad</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">(event: SyntheticEvent&lt;HTMLImageElement&gt;) =&gt; void</td>
              <td className="border border-gray-300 px-4 py-2">图片加载成功时触发</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">onError</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">(event: SyntheticEvent&lt;HTMLImageElement&gt;) =&gt; void</td>
              <td className="border border-gray-300 px-4 py-2">图片加载失败时触发</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>使用示例</h4>
      <pre className="code-block">
{`import { CatImage } from '@caac/react'
import { useState } from 'react'

function MyComponent() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <CatImage
      width={400}
      height="300px"
      className="rounded-lg shadow-md"
      style={{ border: '2px solid #ccc' }}
      onLoad={() => setIsLoaded(true)}
      onError={(e) => console.error('加载失败:', e)}
    />
  )
}`}
      </pre>

      <h2>Vue 组件 API</h2>

      <h3>CatImage 组件</h3>
      <p>Vue 版本的猫咪图片组件，与 React 版本功能相同。</p>

      <h4>Props</h4>
      <div className="not-prose overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">属性名</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">类型</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">默认值</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">width</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">number | string</td>
              <td className="border border-gray-300 px-4 py-2">300</td>
              <td className="border border-gray-300 px-4 py-2">图片宽度</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">height</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">number | string</td>
              <td className="border border-gray-300 px-4 py-2">300</td>
              <td className="border border-gray-300 px-4 py-2">图片高度</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">class</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">string</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">CSS 类名</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">style</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">object | string</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">内联样式</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>TypeScript 类型定义（Vue 3）</h4>
      <pre className="code-block">
{`interface CatImageProps {
  width?: number | string
  height?: number | string
  class?: string
  style?: string | Record<string, any>
}

// Vue 3 Composition API
declare const CatImage: DefineComponent<CatImageProps>

// Vue 2 Options API
declare const CatImage: Vue.Component`}
      </pre>

      <h4>事件</h4>
      <div className="not-prose overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">事件名</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">参数</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">@load</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">event: Event</td>
              <td className="border border-gray-300 px-4 py-2">图片加载成功时触发</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-mono">@error</td>
              <td className="border border-gray-300 px-4 py-2 font-mono">event: Event</td>
              <td className="border border-gray-300 px-4 py-2">图片加载失败时触发</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>使用示例</h4>

      <h5>Vue 3 Composition API</h5>
      <pre className="code-block">
{`<template>
  <CatImage
    :width="400"
    height="300px"
    class="rounded-lg shadow-md"
    :style="{ border: '2px solid #ccc' }"
    @load="handleLoad"
    @error="handleError"
  />
</template>

<script setup>
import { CatImage } from '@caac/vue'

const handleLoad = (event) => {
  console.log('图片加载成功', event)
}

const handleError = (event) => {
  console.error('图片加载失败', event)
}
</script>`}
      </pre>

      <h5>Vue 2 Options API</h5>
      <pre className="code-block">
{`<template>
  <CatImage
    :width="width"
    :height="height"
    @load="handleLoad"
    @error="handleError"
  />
</template>

<script>
import { CatImage } from '@caac/vue'

export default {
  components: {
    CatImage
  },
  data() {
    return {
      width: 400,
      height: 300
    }
  },
  methods: {
    handleLoad(event) {
      console.log('图片加载成功', event)
    },
    handleError(event) {
      console.error('图片加载失败', event)
    }
  }
}
</script>`}
      </pre>

      <h2>通用特性</h2>

      <h3>图片来源</h3>
      <p>组件使用 <a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">The Cat API</a> 提供随机猫咪图片。每个组件实例都会获取一张不同的图片。</p>

      <h3>响应式支持</h3>
      <p>组件支持响应式尺寸，可以使用百分比或其他 CSS 单位：</p>

      <pre className="code-block">
{`// React
<CatImage width="100%" height="auto" />

// Vue
<CatImage width="100%" height="auto" />`}
      </pre>

      <h3>加载状态</h3>
      <p>组件内置加载状态处理，在图片加载过程中会显示加载提示。</p>

      <h3>错误处理</h3>
      <p>当图片加载失败时，组件会显示友好的错误信息，并可通过事件回调进行自定义处理。</p>

      <h3>性能优化</h3>
      <ul>
        <li><strong>懒加载</strong>: 图片默认启用懒加载，减少初始页面负担</li>
        <li><strong>缓存友好</strong>: API 响应包含适当的缓存头</li>
        <li><strong>轻量级</strong>: 组件打包后 &lt; 5KB gzipped</li>
      </ul>

      <h2>浏览器兼容性</h2>

      <div className="not-prose">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <h4 className="font-semibold mb-2">支持的浏览器</h4>
          <ul className="space-y-1 text-sm">
            <li>✅ Chrome 88+</li>
            <li>✅ Firefox 85+</li>
            <li>✅ Safari 14+</li>
            <li>✅ Edge 88+</li>
            <li>✅ iOS Safari 14+</li>
            <li>✅ Android Chrome 88+</li>
          </ul>
        </div>
      </div>

      <h2>故障排除</h2>

      <h3>常见问题</h3>

      <div className="not-prose space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">图片无法显示</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">可能的原因和解决方案：</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• 检查网络连接是否正常</li>
            <li>• 确认防火墙或广告拦截器没有阻止 API 请求</li>
            <li>• 使用 <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">onError</code> 回调处理加载失败</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">TypeScript 类型错误</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">确保正确导入类型：</p>
          <pre className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
{`// React
import { CatImage, type CatImageProps } from '@caac/react'

// Vue
import { CatImage } from '@caac/vue'`}
          </pre>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">服务端渲染问题</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">组件已经处理了 SSR 兼容性，如果仍有问题，请确保：</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• 正确配置框架的客户端激活</li>
            <li>• 处理水合不匹配的情况</li>
          </ul>
        </div>
      </div>

      <div className="not-prose mt-8 p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
          💬 需要帮助？
        </h4>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          如果你遇到其他问题，请查看我们的 
          <a href="https://github.com/your-org/caac/issues" className="underline ml-1">GitHub Issues</a> 
          或创建新的问题报告。
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'API 参考',
  description: 'CAAC 组件库的完整 API 参考文档'
};