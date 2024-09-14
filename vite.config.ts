import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sass from 'sass'

import createSvgSpritePlugin from 'vite-plugin-svg-spriter'

const ICONS_PATH = path.resolve(__dirname, './src/shared/assets/icons')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), createSvgSpritePlugin({ svgFolder: ICONS_PATH })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@root': path.resolve(__dirname, '.'),
			'@app': path.resolve(__dirname, './src/app'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@features': path.resolve(__dirname, './src/features'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@widgets': path.resolve(__dirname, './src/widgets')
		}
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly'
		},
		preprocessorOptions: {
			scss: {
				implementation: sass,
				additionalData: '@import "@app/styles/assets/_breakpoints"; \n @import "@app/styles/utils/_functions";'
			}
		}
	}
})
