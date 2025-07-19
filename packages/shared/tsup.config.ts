import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false, // Disable for now
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  outDir: 'dist',
  target: 'es2020'
});