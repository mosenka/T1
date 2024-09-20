export interface ProductResponseType {
	id: number
	title: string
	description: string
	category: string
	price: number
	discountPercentage?: number
	rating: number
	stock: number
	tags: Array<string>
	brand: string
	sku: string
	weight: number
	warrantyInformation: string
	shippingInformation: string
	availabilityStatus: string
	returnPolicy: string
	minimumOrderQuantity: number
	images: Array<string>
	thumbnail: string
}
