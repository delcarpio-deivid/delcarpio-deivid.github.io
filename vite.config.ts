import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// user.github.io → base '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
