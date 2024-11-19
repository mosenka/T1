import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Raiting } from './Raiting'

import styles from './Raiting.module.scss'

describe('Raiting', () => {
	it('Should render with count props', () => {
		const { container } = render(<Raiting count={3} />)

		const activeStars = container.querySelectorAll(`.${styles.isActive}`)
		const commonCountStars = container.querySelectorAll('span')

		expect(container).toBeInTheDocument()
		expect(commonCountStars).toHaveLength(5)
		expect(activeStars).toHaveLength(3)
	})

	it('throws an error when count is greater than 5', () => {
		const renderWithExcessiveCount = () => render(<Raiting count={6} />)

		expect(renderWithExcessiveCount).toThrow('Размер рейтинга не может превышать 5')
	})

	it('rounds count to nearest star integer', () => {
		const { container } = render(<Raiting count={2.4} />)

		const activeStars = container.querySelectorAll(`.${styles.isActive}`)

		expect(activeStars).toHaveLength(2)
	})
})
