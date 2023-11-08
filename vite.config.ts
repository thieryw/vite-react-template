import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === "production" ? "/test" : "";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  "define": {
    "__BASE_URL__": JSON.stringify(base)
  }
})
