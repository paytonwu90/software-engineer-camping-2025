import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/software-engineer-camping-2025/',
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@images': resolve(__dirname, 'src/assets/images')
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        blog: resolve(__dirname, 'src/blog.html')
      }
    }
  },
  server: {
    port: 8080
  }
})
