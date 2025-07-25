import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite' - tailwindcss version 4
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
