import { ProductResponseType } from './ProductResponseType'

export interface ProductsListResponseType {
	limit: number
	products: Array<ProductResponseType>
	skip: number
	total: number
}
