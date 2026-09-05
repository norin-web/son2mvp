import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // No custom domain yet, so GitHub Pages serves this from a subpath:
  // https://norin-web.github.io/son2mvp/. Every image goes through the img()
  // helper, which reads import.meta.env.BASE_URL, so both cases work.
  // When a custom domain is attached: set this to '/' and add public/CNAME.
  base: '/son2mvp/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
