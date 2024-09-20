import React, { useMemo } from 'react'

import { useAppSelector } from '@shared/libs/hooks'
import { Button, CardSkeleton, ErrorMessage } from '@shared/ui'

import { ProductCard, useGetProductsList } from '@entities/product'
import { AddToCartButton, getCartStates } from '@entities/cart'

import styles from './ProductsList.module.scss'

export const ProductsList: React.FC = () => {
	const { isLoading, isError, productsList, fetchMoreProducts } = useGetProductsList()
	const { cartsList } = useAppSelector(getCartStates)

	const loadingCardsList = Array.from({ length: 12 }, (_, i) => <CardSkeleton key={i} />)

	const productsCardsList = useMemo(() => {
		return productsList?.map(product => {
			const quantity = cartsList?.carts[0]?.products?.find(item => item.id === product.id)?.quantity
			const button = <AddToCartButton count={quantity} />

			return <ProductCard product={product} key={product.id} cartButton={button} />
		})
	}, [productsList, cartsList])

	if (isLoading) {
		return <div className={styles.list}>{loadingCardsList}</div>
	}

	if (isError) {
		return <ErrorMessage />
	}

	if (productsList.length === 0) {
		return <p> список пуст...</p>
	}

	return (
		<>
			<div className={styles.list}>{productsCardsList}</div>
			<div className={styles.buttonWrapper}>
				<Button size={Button.SIZE.XL} aria-label={'show more products card'} onClick={fetchMoreProducts}>
					Show more
				</Button>
			</div>
		</>
	)
}
