import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: {
      react: 'src/react/index.ts',
      shared: 'src/shared/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', 'vue'],
  },
  {
    entry: {
      index: 'src/index.ts',
      vue: 'src/vue/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: false,
    splitting: false,
    sourcemap: true,
    external: ['react', 'react-dom', 'vue'],
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.vue': 'text',
      }
    },
    onSuccess: async () => {
      const fs = await import('node:fs')
      const path = await import('node:path')

      const vueFiles = ['CatImage.vue', 'CatGallery.vue', 'shims-vue.d.ts']
      for (const file of vueFiles) {
        const srcFile = path.resolve('src/vue', file)
        const distFile = path.resolve('dist', file.replace('shims-vue.d.ts', 'vue.d.ts'))
        if (fs.existsSync(srcFile)) {
          fs.copyFileSync(srcFile, distFile)
        }
      }
    },
  },
])
