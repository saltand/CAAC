# CAAC - 跨框架猫图组件库

CAAC (Cross-framework Auto Cat API Component) 是一个简单易用的跨框架猫咪图片展示组件库，同时支持 Vue 和 React 框架。

## ✨ 特性

- 🎨 **跨框架支持**：同时支持 Vue 和 React，API 一致
- 🐱 **随机猫图**：使用 The Cat API 获取高质量猫咪图片
- ⚡ **开箱即用**：无需额外配置，支持加载状态和错误处理
- 📱 **TypeScript 支持**：完整的类型定义
- 🎯 **简单导入**：通过子路径轻松导入框架特定组件

## 📦 安装

```bash
npm install caac
```

```bash
yarn add caac
```

```bash
pnpm add caac
```

## 🚀 快速开始

### Vue 3

```vue
<template>
  <CatImage :width="300" :height="300" />
</template>

<script setup>
import { CatImage } from 'caac/vue'
</script>
```

### React

```jsx
import { CatImage } from 'caac/react'

export default function App() {
  return <CatImage width={300} height={300} />
}
```

### Next.js

```jsx
import { CatImage } from 'caac/react'

export default function Page() {
  return (
    <div>
      <h1>Random Cat Images</h1>
      <CatImage width={400} height={300} />
    </div>
  )
}
```

## 📚 API 文档

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `width` | `number \| string` | `300` | 图片宽度 |
| `height` | `number \| string` | `300` | 图片高度 |
| `className` | `string` | - | CSS 类名 (仅 React) |
| `style` | `CSSProperties` | - | 内联样式 (仅 React) |

### TypeScript 类型

```typescript
import type { CatImageData } from 'caac/shared'

// 猫咪图片数据类型
interface CatImageData {
  id: string
  url: string
  width: number
  height: number
}
```

## 🎨 样式自定义

### React

```jsx
import { CatImage } from 'caac/react'

function MyComponent() {
  return (
    <CatImage
      width={400}
      height={300}
      className="my-cat-image"
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    />
  )
}
```

### Vue

```vue
<template>
  <CatImage 
    :width="400" 
    :height="300" 
    class="my-cat-image"
  />
</template>

<script setup>
import { CatImage } from 'caac/vue'
</script>

<style scoped>
.my-cat-image {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
```

## 🔧 高级用法

### 响应式设计

```jsx
// React
import { CatImage } from 'caac/react'

function ResponsiveCatImage() {
  return (
    <CatImage
      width="100%"
      height="300px"
      style={{ maxWidth: '500px' }}
    />
  )
}
```

```vue
<!-- Vue -->
<template>
  <CatImage 
    width="100%" 
    height="300px"
    style="max-width: 500px"
  />
</template>

<script setup>
import { CatImage } from 'caac/vue'
</script>
```

### 错误处理

组件内置了完整的错误处理机制：

- ⏳ **加载状态**：显示 "Loading cat..." 提示
- ❌ **错误状态**：显示 "Failed to load cat image" 提示
- ✅ **成功状态**：显示猫咪图片

## 🌟 示例

查看 [在线演示](https://caac-demo.vercel.app) 或运行本地示例：

```bash
git clone https://github.com/caac-team/caac.git
cd caac
pnpm install
pnpm dev
```

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与项目开发。

## 🐛 问题反馈

如果遇到问题或有功能建议，请在 [GitHub Issues](https://github.com/caac-team/caac/issues) 中反馈。

---

**Made with ❤️ for cat lovers and developers**