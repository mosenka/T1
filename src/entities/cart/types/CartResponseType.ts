import { CartsProductResponseType } from './CartsProductResponseType.ts'

export interface CartResponseType {
	id: number
	products: Array<CartsProductResponseType>
	total: number
	discountedTotal: number
	userId: number
	totalProducts: number
	totalQuantity: number
}
