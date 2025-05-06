import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/software-engineer-camping-2025/',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
})
