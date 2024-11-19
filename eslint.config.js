import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

import eslintConfigPrettier from 'eslint-config-prettier'

import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
	js.configs.recommended,
	eslintConfigPrettier,
	jsxA11y.flatConfigs.strict,
	{ ignores: ['dist', 'vite.config.ts', 'aliases.ts'] },
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module'
			},
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@typescript-eslint': tsPlugin
		},

		rules: {
			...tsPlugin.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-multiple-empty-lines': ['error', { max: 1 }]
		}

	}
]
