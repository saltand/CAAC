export default function VueInstallationPage() {
  return (
    <div className="prose max-w-none">
      <h1>Vue 安装指南</h1>
      
      <p>
        @caac/vue 支持 Vue 2.7+ 和 Vue 3.x，可以在任何 Vue 项目中使用。
      </p>

      <h2>系统要求</h2>
      <ul>
        <li><strong>Vue</strong>: 2.7.0+ 或 3.0.0+</li>
        <li><strong>Node.js</strong>: 16.0.0+</li>
        <li><strong>包管理器</strong>: npm、yarn、或 pnpm</li>
      </ul>

      <h2>安装</h2>
      
      <h3>使用 npm</h3>
      <pre className="code-block">
{`npm install @caac/vue`}
      </pre>

      <h3>使用 yarn</h3>
      <pre className="code-block">
{`yarn add @caac/vue`}
      </pre>

      <h3>使用 pnpm</h3>
      <pre className="code-block">
{`pnpm add @caac/vue`}
      </pre>

      <h2>导入组件</h2>

      <h3>全局注册（推荐）</h3>
      <p>在你的 main.js 或 main.ts 文件中全局注册组件：</p>

      <h4>Vue 3</h4>
      <pre className="code-block">
{`import { createApp } from 'vue'
import { CatImage } from '@caac/vue'
import App from './App.vue'

const app = createApp(App)
app.component('CatImage', CatImage)
app.mount('#app')`}
      </pre>

      <h4>Vue 2</h4>
      <pre className="code-block">
{`import Vue from 'vue'
import { CatImage } from '@caac/vue'
import App from './App.vue'

Vue.component('CatImage', CatImage)

new Vue({
  render: h => h(App),
}).$mount('#app')`}
      </pre>

      <h3>局部导入</h3>
      <p>在单个组件中按需导入：</p>

      <pre className="code-block">
{`<template>
  <div>
    <CatImage :width="300" :height="300" />
  </div>
</template>

<script setup>
import { CatImage } from '@caac/vue'
</script>`}
      </pre>

      <h4>Options API 方式（Vue 2）</h4>
      <pre className="code-block">
{`<template>
  <div>
    <CatImage :width="300" :height="300" />
  </div>
</template>

<script>
import { CatImage } from '@caac/vue'

export default {
  components: {
    CatImage
  }
}
</script>`}
      </pre>

      <h2>框架集成</h2>

      <h3>Nuxt.js</h3>
      <p>在 Nuxt.js 项目中，你可以创建一个插件来注册组件：</p>

      <p>创建 <code>plugins/caac.client.js</code>:</p>
      <pre className="code-block">
{`import { CatImage } from '@caac/vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('CatImage', CatImage)
})`}
      </pre>

      <p>然后在 <code>nuxt.config.ts</code> 中注册插件：</p>
      <pre className="code-block">
{`export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/caac.client.js', mode: 'client' }
  ]
})`}
      </pre>

      <h3>Vite</h3>
      <p>@caac/vue 完全兼容 Vite，无需额外配置。</p>

      <h3>Vue CLI</h3>
      <p>@caac/vue 完全兼容 Vue CLI 项目，无需额外配置。</p>

      <h2>TypeScript 支持</h2>
      <p>@caac/vue 包含完整的 TypeScript 类型定义，如果你使用 TypeScript，可以享受完整的类型提示。</p>

      <pre className="code-block">
{`<script setup lang="ts">
import { CatImage } from '@caac/vue'

// 类型安全的 props
const width: number = 300
const height: number = 300
</script>

<template>
  <CatImage :width="width" :height="height" />
</template>`}
      </pre>

      <h2>验证安装</h2>
      <p>创建一个简单的测试页面来验证安装是否成功：</p>

      <pre className="code-block">
{`<template>
  <div>
    <h1>测试 CAAC Vue 组件</h1>
    <CatImage />
  </div>
</template>

<script setup>
import { CatImage } from '@caac/vue'
</script>`}
      </pre>

      <p>如果看到一个可爱的猫咪图片，说明安装成功！</p>

      <div className="not-prose mt-8 p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
          🎯 下一步
        </h4>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          安装完成后，查看 <a href="/docs/vue/usage" className="underline">使用方法</a> 了解如何配置和自定义组件。
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Vue 安装指南',
  description: 'CAAC Vue 组件的详细安装指南'
};