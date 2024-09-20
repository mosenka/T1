import React from 'react'

// import { CartsProductCard, AddToCartButton, RemoveFromCartButton } from '@entities/cart'

import styles from './CartsProductsList.module.scss'

//
// const LIST: Array<ProductType & { count: number }> = [
// 	{ id: faker.string.alpha(10), name: 'Essence Mascara Lash Princess', price: 110, count: 1, image: product },
// 	{ id: faker.string.alpha(10), name: 'Essence Mascara Lash Princess', price: 110, count: 1, image: product },
// 	{ id: faker.string.alpha(10), name: 'Essence Mascara Lash Princess', price: 110, count: 5, image: product },
// 	{
// 		id: faker.string.alpha(10),
// 		name: 'Essence Mascara Lash Princess',
// 		price: 110,
// 		count: 0,
// 		image: product
// 	}
// ]

export const CartsProductsList: React.FC = () => {
	// const cardsList = LIST.map(product => {
	// 	const cartButton = (
	// 		<div className={styles.buttons}>
	// 			<AddToCartButton count={product.count} />
	// 			{product.count > 0 && <RemoveFromCartButton id={product.id} />}
	// 		</div>
	// 	)
	// 	return (
	// 		<CartsProductCard
	// 			product={product}
	// 			key={product.id}
	// 			cartButton={cartButton}
	// 			isDeleted={product.count === 0}
	// 		/>
	// 	)
	// })

	return <div className={styles.list}>list</div>
}
