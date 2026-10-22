import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 使用相對路徑，讓建置結果可以部署在 GitHub Pages 的子路徑 (/TaiwanCampPrototype/)
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
