import path from 'path'
import { AliasOptions } from 'vite'

export const aliases: AliasOptions = {
	'@': path.resolve(__dirname, './src'),
	'@root': path.resolve(__dirname, '.'),
	'@app': path.resolve(__dirname, './src/app'),
	'@entities': path.resolve(__dirname, './src/entities'),
	'@features': path.resolve(__dirname, './src/features'),
	'@pages': path.resolve(__dirname, './src/pages'),
	'@shared': path.resolve(__dirname, './src/shared'),
	'@widgets': path.resolve(__dirname, './src/widgets')
}
