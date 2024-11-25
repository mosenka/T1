import { aliases } from './aliases'
import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'
import path from 'path'
import sass from 'sass'

dotenv.config()

import createSvgSpritePlugin from 'vite-plugin-svg-spriter'

const ICONS_PATH = path.resolve(__dirname, './src/shared/assets/icons')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), createSvgSpritePlugin({ svgFolder: ICONS_PATH })],
	define: {
		'process.env': process.env
	},
	resolve: {
		alias: aliases
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
