import { defineConfig } from 'vite'
// import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // dts({ include: ['src'] }),
  ],
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.ts'),
  //     formats: ['es']
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM'
  //       }
  //     }
  //   }
  // }
})
