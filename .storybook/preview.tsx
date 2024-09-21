import type { Preview } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import '@app/styles/assets/_storybook.scss'
import '@app/styles/global.scss'

const preview: Preview = {
	decorators: [
		Story => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		)
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
