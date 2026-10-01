import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';import tailwind from '@tailwindcss/postcss';import path from 'node:path';
export default defineConfig({plugins:[react()],css:{postcss:{plugins:[tailwind()]}},resolve:{alias:{'@':path.resolve('src')}},server:{host:'127.0.0.1',port:5173,strictPort:true}});
