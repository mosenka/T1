import { CartResponseType } from '../../types/CartResponseType.ts'

export const getProductCountInCart = (product_id: number, cart: CartResponseType | null): null | number => {
	if (!cart) return null

	return cart.products?.find(item => item.id === product_id)?.quantity ?? null
}
