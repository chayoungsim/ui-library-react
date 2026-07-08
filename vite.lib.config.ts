import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: './tsconfig.build.json' }),
  ],
  publicDir: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'UiLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `ui-library.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    cssCodeSplit: false,
    outDir: 'dist',
  },
})
