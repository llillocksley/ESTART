import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",   // must match your repo folder
  plugins: [react()],
})
