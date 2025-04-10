import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/apple-react-api-integration/',
  plugins: [react()],
  server: {
    port: 2244,
  }
})
