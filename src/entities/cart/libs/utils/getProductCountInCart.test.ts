import { describe, it, expect } from 'vitest'

import { getProductCountInCart } from './getProductCountInCart'

describe('getProductCountInCart', () => {
	const cart = {
		id: 15,
		products: [
			{
				id: 11,
				title: 'Annibale Colombo Bed',
				price: 1899.99,
				quantity: 5,
				total: 9499.95,
				discountPercentage: 8.09,
				discountedTotal: 8731.4,
				thumbnail: 'some string'
			},
			{
				id: 133,
				title: 'Samsung Galaxy S10',
				price: 699.99,
				quantity: 3,
				total: 2099,
				discountPercentage: 1.12,
				discountedTotal: 2076.45,
				thumbnail: 'some string'
			}
		],
		total: 11741.31,
		discountedTotal: 10940.95,
		userId: 11,
		totalProducts: 5,
		totalQuantity: 19
	}

	it('should return null if cart is null', () => {
		const result = getProductCountInCart(1, null)
		expect(result).toBeNull()
	})

	it('should return quantity of the product with specified id', () => {
		const result = getProductCountInCart(11, cart)
		expect(result).toBe(5)
	})

	it('should return null if the product is not found in the cart', () => {
		const result = getProductCountInCart(3, cart)
		expect(result).toBeNull()
	})
})
