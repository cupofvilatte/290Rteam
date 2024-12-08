import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp', '**/*.avif'],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html', 
        gratitude: 'src/gratitude.html',
        quiz: 'src/quiz.html',
        recipes: 'src/recipe-page.html'
      }
    }
  },
  plugins: [deno()],
  publicDir: 'public'
})
