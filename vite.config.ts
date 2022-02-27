import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
      'utils':path.relative(__dirname,'src/utils')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/styles/index.scss";'
      }
    }
  },
  base:'/',
  publicDir: 'assets',
})
