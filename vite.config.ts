import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('sub-vue3', { useDevMode })],
  server: {
    cors: true,
  },
})
