import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Absolute base required so prerendered nested pages load /assets correctly
export default defineConfig({
  plugins: [react()],
  base: '/',
})
