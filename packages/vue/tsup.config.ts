import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false, // Generate manually if needed
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  outDir: 'dist',
  target: 'es2020',
  external: ['vue', '@caac/shared']
});