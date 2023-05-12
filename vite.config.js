import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import resolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'react-router-dom',
        '@mui/material'
      ],
      plugins: [
        resolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          modulesOnly: true,
          customResolveOptions: {
            modulePaths: ['node_modules', '@mui/material'],
          },
        }),
      ],
    },
  },
  plugins: [react()],
})
