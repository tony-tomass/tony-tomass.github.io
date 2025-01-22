import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    root,
    plugins: [react()],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                home: resolve(root, 'pages', 'home', 'index.html'),
                artwork: resolve(root, 'pages', 'artwork', 'index.html'),
            }
        }
    }
},
)
