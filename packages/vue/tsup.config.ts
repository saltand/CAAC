import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  outDir: 'dist',
  target: 'es2020',
  external: ['vue', '@caac/shared'],
  esbuildOptions: (options) => {
    options.loader = {
      ...options.loader,
      '.vue': 'text'
    };
  },
  onSuccess: async () => {
    // Copy Vue files to dist
    const fs = await import('fs');
    const path = await import('path');
    
    const vueFile = path.resolve('src/CatImage.vue');
    const distVueFile = path.resolve('dist/CatImage.vue');
    
    if (fs.existsSync(vueFile)) {
      fs.copyFileSync(vueFile, distVueFile);
    }
  }
});