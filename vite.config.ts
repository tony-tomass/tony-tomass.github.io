import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src', 'pages')
const outDir = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
    base: '/tony-tomass.github.io/',
    root,
    plugins: [react()],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                artwork: resolve(root, 'artwork', 'index.html'),
                othersArt: resolve(root, 'artwork', 'othersArt', 'index.html'),
                fanArt: resolve(root, 'artwork', 'fanArt', 'index.html'),
                projects: resolve(root, 'projects', 'index.html'),
                wip: resolve(root, 'wip', 'index.html')
            }
        }
    },
    server: {
        port: 8000
    }
},
)
