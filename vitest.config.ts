import { aliases } from './aliases'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	resolve: {
		alias: aliases
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts'
	}
})
