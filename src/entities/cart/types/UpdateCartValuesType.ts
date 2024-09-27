export interface UpdateCartValuesType {
	cartId: number
	products: Array<{ id: number; quantity: number }>
}
