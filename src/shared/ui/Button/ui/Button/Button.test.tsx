import { describe, it, expect, vi } from 'vitest'

import { fireEvent, render, screen } from '@testing-library/react'

import styles from './Button.module.scss'

import { Button } from './Button'

describe('Button', () => {
	it('Should render with default props', () => {
		render(<Button>Button text</Button>)

		const button = screen.getByText('Button text')

		expect(button).toBeInTheDocument()
		expect(button).toHaveClass(styles.btn)
		expect(button).toHaveClass(styles.orange)
		expect(button).toHaveClass(styles.sm)
	})

	it('Should render with theme and size props', () => {
		render(
			<Button theme={Button.THEME.Orange} size={Button.SIZE.XL}>
				Button text
			</Button>
		)

		const button = screen.getByText('Button text')

		expect(button).toBeInTheDocument()
		expect(button).toHaveClass(styles.btn)
		expect(button).toHaveClass(styles.orange)
		expect(button).toHaveClass(styles.xl)
	})

	it('fires the click event handler', () => {
		const hanlerClick = vi.fn()
		render(<Button onClick={hanlerClick}>Button text</Button>)

		const button = screen.getByText('Button text')

		fireEvent.click(button)

		expect(hanlerClick).toHaveBeenCalledTimes(1)
	})
})
