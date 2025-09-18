# CAAC - Cat as A Component

CAAC (Cross-framework Auto Cat API Component) is a simple and easy-to-use cross-framework cat image display component library that supports both Vue and React frameworks.

## ✨ Features

- 🎨 **Cross-framework Support**: Supports both Vue and React with consistent API
- 🐱 **Random Cat Images**: Uses The Cat API to fetch high-quality cat images
- ⚡ **Ready to Use**: No additional configuration needed, with loading states and error handling
- 📱 **TypeScript Support**: Full type definitions included
- 🎯 **Simple Import**: Easy framework-specific component import via sub-paths

## 📦 Installation

```bash
npm install @saltand/caac
```

```bash
yarn add @saltand/caac
```

```bash
pnpm add @saltand/caac
```

## 🚀 Quick Start

### Method 1: Recommended Sub-path Import

#### Vue 3

```vue
<template>
  <CatImage :width="300" :height="300" />
</template>

<script setup>
import { CatImage } from '@saltand/caac/vue'
</script>
```

#### React

```jsx
import { CatImage } from '@saltand/caac/react'

export default function App() {
  return <CatImage width={300} height={300} />
}
```

### Method 2: Main Entry Import

#### Vue 3

```vue
<template>
  <VueCatImage :width="300" :height="300" />
</template>

<script setup>
import { VueCatImage } from '@saltand/caac'
</script>
```

#### React

```jsx
import { ReactCatImage } from '@saltand/caac'

export default function App() {
  return <ReactCatImage width={300} height={300} />
}
```

### Next.js

```jsx
import { CatImage } from '@saltand/caac/react'

export default function Page() {
  return (
    <div>
      <h1>Random Cat Images</h1>
      <CatImage width={400} height={300} />
    </div>
  )
}
```

## 📘 Storybook

Storybook setups are available for both framework packages to explore component behaviour and props in isolation. Mocked responses are provided so the gallery works without hitting the public Cat API.

- **React package**: `pnpm --filter @caac/react storybook` (default port `6006`)
- **Vue package**: `pnpm --filter @caac/vue storybook` (default port `6007`)

To build the static docs:

- React: `pnpm --filter @caac/react build-storybook`
- Vue: `pnpm --filter @caac/vue build-storybook`

## 📚 API Documentation

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number \| string` | `300` | Image width |
| `height` | `number \| string` | `300` | Image height |
| `className` | `string` | - | CSS class name (React only) |
| `style` | `CSSProperties` | - | Inline styles (React only) |

### TypeScript Types

```typescript
import type { CatImageData } from '@saltand/caac/shared'

// Cat image data type
interface CatImageData {
  id: string
  url: string
  width: number
  height: number
}
```

## 🎨 Styling Customization

### React

```jsx
import { CatImage } from '@saltand/caac/react'

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
import { CatImage } from '@saltand/caac/vue'
</script>

<style scoped>
.my-cat-image {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
```

## 🔧 Advanced Usage

### Responsive Design

```jsx
// React
import { CatImage } from '@saltand/caac/react'

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
import { CatImage } from '@saltand/caac/vue'
</script>
```

### Error Handling

The component includes comprehensive error handling:

- ⏳ **Loading State**: Shows "Loading cat..." message
- ❌ **Error State**: Shows "Failed to load cat image" message
- ✅ **Success State**: Displays the cat image

## 🌟 Examples

Check out the [live demo](https://caac-demo.vercel.app) or run local examples:

```bash
git clone https://github.com/caac-team/caac.git
cd caac
pnpm install
pnpm dev
```

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please check the [Contributing Guide](CONTRIBUTING.md) to learn how to participate in the project development.

## 🐛 Issue Reports

If you encounter issues or have feature suggestions, please report them in [GitHub Issues](https://github.com/caac-team/caac/issues).

---

**Made with ❤️ for cat lovers and developers**
