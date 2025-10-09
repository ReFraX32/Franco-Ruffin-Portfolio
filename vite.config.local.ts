import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Configuration for local file access
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist-local',
    assetsDir: 'assets',
  }
})