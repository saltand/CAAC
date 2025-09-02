# CAAC 跨框架猫图组件库

CAAC (Cross-framework Auto Cat API Component) 是一个简单易用的跨框架猫咪图片展示组件库，同时支持 Vue 和 React 框架。

## 特性

- 🎨 **跨框架支持**：同时支持 Vue 和 React，API 一致
- 🐱 **随机猫图**：使用 The Cat API 获取高质量猫咪图片
- ⚡ **开箱即用**：无需额外配置，支持加载状态和错误处理
- 📱 **TypeScript 支持**：完整的类型定义

## 快速开始

### Vue

```bash
npm install @caac/vue
```

```vue
<template>
  <CatImage :width="300" :height="300" />
</template>

<script setup>
import { CatImage } from '@caac/vue'
</script>
```

### React

```bash
npm install @caac/react
```

```jsx
import { CatImage } from '@caac/react'

export default function App() {
  return <CatImage width={300} height={300} />
}
```

## 文档

访问 [在线文档](./docs) 查看完整的使用指南和演示。

## License

MIT