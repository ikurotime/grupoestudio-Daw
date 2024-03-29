import { defineConfig } from 'vitest/config'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    exclude: [
      'node_modules',
      'dist',
      'build',
      'cypress',
      'e2e',
      'vite.config.ts'
    ]
  }
})
