import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
    vue(),
    copy({
      targets: [
        { src: './node_modules/@dtnum/core/dist/collection/icons', dest: 'public' },
        { src: './node_modules/@dtnum/core/dist/collection/fonts', dest: 'public' },
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }

  }
})
