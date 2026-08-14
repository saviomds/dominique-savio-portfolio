import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This project uses plain CSS — no PostCSS/Tailwind needed.
  // Setting this explicitly stops Vite from searching parent folders
  // for a postcss.config file (which can pick up unrelated configs).
  css: {
    postcss: {},
  },
})
