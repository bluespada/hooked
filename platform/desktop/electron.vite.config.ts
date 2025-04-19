import { type UserConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
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
                '@renderer': path.resolve('src/renderer/src')
            }
        },
        plugins: [
            react(),
        ]
    }
} satisfies UserConfig;