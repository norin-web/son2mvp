import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from the root of the custom domain in public/CNAME. If the domain
  // is ever removed and Pages falls back to norin-web.github.io/son2mvp/,
  // this must become '/son2mvp/' or every asset 404s and the page goes blank.
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
