import React from 'react'

import { useAppSelector } from '@shared/libs/hooks'
import { ErrorMessage } from '@shared/ui'

import {
	AddToCartButton,
	CartsProductCard,
	CartsProductCardLoader,
	EmptyCardMessage,
	getCartStates,
	RemoveFromCartButton,
	TotalSummaryCard,
	TotalSummaryCardLoader
} from '@entities/cart'

import styles from './CartsProductsList.module.scss'

export const CartsProductsList: React.FC = () => {
	const { cart, isLoading, isError } = useAppSelector(getCartStates)

	const loadingCardsList = Array.from({ length: 5 }, (_, i) => <CartsProductCardLoader key={i} />)

	const cardsRenderList = cart?.products?.map(product => {
		const cartButton = (
			<div className={styles.buttons}>
				<AddToCartButton count={product.quantity} />
				{product.quantity > 0 && <RemoveFromCartButton id={product.id} />}
			</div>
		)
		return <CartsProductCard product={product} key={product.id} cartButton={cartButton} />
	})

	if (isError) {
		return <ErrorMessage />
	}

	if (isLoading) {
		return (
			<div className={styles.content}>
				<div className={styles.list}>{loadingCardsList}</div>
				<TotalSummaryCardLoader />
			</div>
		)
	}

	if (cart && cart?.products.length > 0) {
		return (
			<div className={styles.content}>
				<div className={styles.list}>{cardsRenderList}</div>
				<TotalSummaryCard count={cart.totalProducts} price={cart.total} totalPrice={cart?.discountedTotal} />
			</div>
		)
	}

	return <EmptyCardMessage />
}
