import path from "path"
import react from "@vitejs/plugin-react"
import Icons from 'unplugin-icons/vite'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    Icons({ compiler: 'jsx', jsx: 'react' })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})