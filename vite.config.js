import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/software-engineer-camping-2025/', //加了 base 之後在 dev 網址會變成 http://localhost:8080/software-engineer-camping-2025/
  //__dirname 是目前這個設定檔（vite.config.js）所在的資料夾
  //resolve(__dirname, 'src') 會組合成完整路徑，例如 /你的專案路徑/src
  //
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
  },
  // Optional: Silence Sass deprecation warnings.
  css: {
    preprocessorOptions: {
       scss: {
         silenceDeprecations: [
           'import',
           'mixed-decls',
           'color-functions',
           'global-builtin',
         ],
       },
    },
 },
})
