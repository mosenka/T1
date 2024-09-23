import { faker } from '@faker-js/faker'
import { ProductType } from '@entities/product'
import product from '@shared/assets/img/product.png'

export const createRandomProductList = (count: number): Array<ProductType> => {
	const list: Array<ProductType> = []

	for (let i = 0; i < count; i++) {
		list.push({
			id: faker.string.alpha(10),
			name: faker.lorem.words({ min: 3, max: 5 }),
			price: faker.number.int({ min: 100, max: 1000 }),
			image: product as string
		})
	}

	return list
}
