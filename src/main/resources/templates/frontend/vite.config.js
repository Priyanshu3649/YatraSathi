import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'src/main/resources/static',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'C:\\Users\\pande\\Downloads\\YatraSathi\\src\\main\\resources\\templates\\frontend\\src\\App.jsx'     }
    }
  }
})
