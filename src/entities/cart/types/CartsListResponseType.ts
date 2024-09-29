import { CartResponseType } from './CartResponseType'

export interface CartsListResponseType {
	carts: Array<CartResponseType>
	total: number
	skip: number
	limit: number
}
