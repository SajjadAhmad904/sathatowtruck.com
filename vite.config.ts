import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so assets load correctly on shared hosting
export default defineConfig({
  plugins: [react()],
  base: './',
})
