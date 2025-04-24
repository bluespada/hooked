import { type UserConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default {
    main: {
        plugins: [
            externalizeDepsPlugin(),
        ]
    },
    preload: {
        plugins: [
            externalizeDepsPlugin()
        ]
    },
    renderer: {
        resolve: {
            alias: {
                '@renderer': path.resolve(__dirname, 'src/renderer/src'),
                '@hooked/app-main': path.resolve(__dirname, '../../apps/main'),
                '@hooked/app-mobile': path.resolve(__dirname, '../../apps/mobile'),
                '@hooked/*': path.resolve(__dirname, '../../packages/core/src')
            }
        },
        plugins: [
            react(),
            tailwindcss(),
        ]
    }
} satisfies UserConfig;