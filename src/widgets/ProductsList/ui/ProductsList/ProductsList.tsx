import React from 'react'

import { createRandomProductList } from '../../lib/createRandomProductList'
import { ProductCard } from '@entities/product'
import { AddToCartButton } from '@entities/cart'

import styles from './ProductsList.module.scss'
import { Button } from '@shared/ui'

export const ProductsList: React.FC = () => {
	const products = React.useMemo(() => createRandomProductList(12), [])

	const button = <AddToCartButton />

	const productsCardsList = products?.map(product => (
		<ProductCard product={product} key={product.id} cartButton={button} />
	))

	return (
		<>
			<div className={styles.list}>{productsCardsList}</div>
			<div className={styles.buttonWrapper}>
				<Button size={Button.SIZE.XL} aria-label={'show more products card'}>
					Show more
				</Button>
			</div>
		</>
	)
}
