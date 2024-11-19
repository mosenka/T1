import { describe, it, expect } from 'vitest'
import { discountedPriceAdapter } from './discountedPriceAdapter.ts'

describe('discounted price adapter function', () => {
	it('should return the same price when discount is 20%', () => {
		expect(discountedPriceAdapter(100, 20)).toBe(80)
	})

	it('should return the same price when discount is 0%', () => {
		expect(discountedPriceAdapter(100, 0)).toBe(100)
	})

	it('should return the same price when discount is 100%', () => {
		expect(discountedPriceAdapter(100, 100)).toBe(0)
	})

	it('should throw an error if discount is less than 0%', () => {
		expect(() => discountedPriceAdapter(100, -10)).toThrow()
	})

	it('should throw an error if discount is more than 100%', () => {
		expect(() => discountedPriceAdapter(100, 110)).toThrow()
	})
})
