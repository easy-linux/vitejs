import { resolve } from 'path'
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import legacy from "@vitejs/plugin-legacy";
import react from '@vitejs/plugin-react'

import pages from './vitejs/pages.config'

const pagesInput = {}

pages.forEach((page => {
    pagesInput[page.name] = page.path
}));


export default defineConfig({
    build: {
        //target: 'es2017',
        target: 'es5',
        outDir: 'build',
        rollupOptions: {
            input: {
                ...pagesInput
            } 
        }
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [
        react(),
        ViteAliases({
            dir: 'src',
            prefix: '@',
        }),
        legacy({
            targets: ['defaults', 'not IE 11'],
        })
    ],
})