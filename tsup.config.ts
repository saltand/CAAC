import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    react: 'src/react/index.ts',
    shared: 'src/shared/index.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'vue']
});