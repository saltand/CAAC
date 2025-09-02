export default function VueUsagePage() {
  return (
    <div className="prose max-w-none">
      <h1>Vue 使用方法</h1>
      
      <p>
        本页面详细介绍如何在 Vue 项目中使用 @caac/vue 组件。
      </p>

      <h2>基本用法</h2>
      <p>最简单的使用方式，组件会自动获取并显示一张随机猫咪图片：</p>

      <pre className="code-block">
{`<template>
  <div>
    <CatImage />
  </div>
</template>

<script setup>
import { CatImage } from '@caac/vue'
</script>`}
      </pre>

      <h2>自定义尺寸</h2>
      <p>你可以通过 <code>width</code> 和 <code>height</code> props 来设置组件的尺寸：</p>

      <pre className="code-block">
{`<template>
  <div>
    <!-- 数字形式 -->
    <CatImage :width="400" :height="300" />
    
    <!-- 字符串形式 -->
    <CatImage width="100%" height="200px" />
  </div>
</template>`}
      </pre>

      <h2>响应式设计</h2>
      <p>组件支持响应式设计，可以很好地适配不同屏幕尺寸：</p>

      <pre className="code-block">
{`<template>
  <div class="container">
    <!-- 自适应容器宽度 -->
    <CatImage width="100%" :height="300" />
    
    <!-- 响应式尺寸 -->
    <CatImage 
      :width="isMobile ? 250 : 400" 
      :height="isMobile ? 200 : 300" 
    />
  </div>
</template>

<script setup>
import { CatImage } from '@caac/vue'
import { ref, onMounted } from 'vue'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
})
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>`}
      </pre>

      <h2>状态处理</h2>
      <p>组件内置了加载和错误状态的处理，无需额外代码：</p>

      <div className="not-prose grid gap-4 md:grid-cols-3 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">加载状态</h4>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Loading cat...
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">错误状态</h4>
          <div className="bg-red-50 dark:bg-red-950/50 rounded p-4 text-center text-sm text-red-600 dark:text-red-400">
            Failed to load cat image
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">正常状态</h4>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 text-center text-sm text-gray-600 dark:text-gray-400">
            🐱 Cat Image
          </div>
        </div>
      </div>

      <h2>多个组件</h2>
      <p>你可以在同一页面使用多个组件，每个都会显示不同的猫咪图片：</p>

      <pre className="code-block">
{`<template>
  <div class="cat-gallery">
    <CatImage 
      v-for="i in 6" 
      :key="i"
      :width="200" 
      :height="200" 
      class="cat-item"
    />
  </div>
</template>

<script setup>
import { CatImage } from '@caac/vue'
</script>

<style scoped>
.cat-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
}

.cat-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>`}
      </pre>

      <h2>在组合式 API 中使用</h2>
      <p>组件与 Vue 3 的组合式 API 完美配合：</p>

      <pre className="code-block">
{`<template>
  <div>
    <h2>{{ title }}</h2>
    <CatImage 
      :width="imageSize.width" 
      :height="imageSize.height" 
      :class="imageClass"
    />
    <button @click="toggleSize">切换尺寸</button>
  </div>
</template>

<script setup>
import { CatImage } from '@caac/vue'
import { ref, computed } from 'vue'

const title = ref('我的猫咪画廊')
const isLarge = ref(false)

const imageSize = computed(() => ({
  width: isLarge.value ? 400 : 300,
  height: isLarge.value ? 300 : 200
}))

const imageClass = computed(() => ({
  'large-image': isLarge.value,
  'small-image': !isLarge.value
}))

const toggleSize = () => {
  isLarge.value = !isLarge.value
}
</script>`}
      </pre>

      <h2>Options API 用法</h2>
      <p>如果你使用 Vue 2 或 Options API，也可以轻松集成：</p>

      <pre className="code-block">
{`<template>
  <div>
    <CatImage 
      :width="width" 
      :height="height"
    />
    <button @click="randomizeSize">随机尺寸</button>
  </div>
</template>

<script>
import { CatImage } from '@caac/vue'

export default {
  components: {
    CatImage
  },
  data() {
    return {
      width: 300,
      height: 300
    }
  },
  methods: {
    randomizeSize() {
      this.width = Math.floor(Math.random() * 200) + 200
      this.height = Math.floor(Math.random() * 200) + 200
    }
  }
}
</script>`}
      </pre>

      <h2>样式自定义</h2>
      <p>组件使用 CSS Modules，你可以通过外层容器来自定义样式：</p>

      <pre className="code-block">
{`<template>
  <div class="custom-cat-container">
    <CatImage :width="300" :height="300" />
  </div>
</template>

<style scoped>
.custom-cat-container {
  border: 4px solid #ff6b6b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
  transition: transform 0.3s ease;
}

.custom-cat-container:hover {
  transform: scale(1.05);
}
</style>`}
      </pre>

      <h2>最佳实践</h2>
      
      <div className="not-prose">
        <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ 推荐做法</h4>
          <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
            <li>• 为组件设置合理的尺寸，避免过大或过小</li>
            <li>• 在画廊或列表中使用时，为每个组件设置唯一的 key</li>
            <li>• 使用响应式设计适配不同屏幕</li>
            <li>• 考虑用户的网络状况，合理使用组件数量</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">❌ 避免做法</h4>
          <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
            <li>• 不要在短时间内创建大量组件，避免 API 限制</li>
            <li>• 不要设置过小的尺寸（小于 100px），影响图片清晰度</li>
            <li>• 不要忘记为组件设置合适的父容器样式</li>
          </ul>
        </div>
      </div>

      <div className="not-prose mt-8 p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
          📖 相关文档
        </h4>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          查看 <a href="/docs/api" className="underline">API 参考</a> 了解完整的组件属性和类型定义。
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Vue 使用方法',
  description: 'CAAC Vue 组件的详细使用指南和示例'
};