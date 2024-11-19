import React, { useMemo } from 'react'

import { Button, ErrorMessage } from '@shared/ui'

import { ProductCard, ProductCardLoader, useGetProductsList } from '@entities/product'
import { CartActionButton } from '@features/CartActionButton'

import styles from './ProductsList.module.scss'

export const ProductsList: React.FC = () => {
	const { isLoading, isError, productsList, fetchMoreProducts, isHideButton } = useGetProductsList()

	const loadingCardsList = Array.from({ length: 12 }, (_, i) => <ProductCardLoader key={i} />)

	const productsCardsList = useMemo(() => {
		return productsList?.map(product => {
			const button = <CartActionButton productId={product.id} totalCount={product.stock} />

			return <ProductCard product={product} key={product.id} cartButton={button} />
		})
	}, [productsList])

	if (productsList.length === 0 && !isLoading) {
		return <p> список пуст...</p>
	}

	return (
		<>
			{productsList?.length > 1 && (
				<>
					<div className={styles.list}>{productsCardsList}</div>
					{isLoading && <div className={styles.list}>{loadingCardsList}</div>}
					{!isHideButton && (
						<div className={styles.buttonWrapper}>
							<Button
								size={Button.SIZE.XL}
								aria-label={'show more products card'}
								onClick={fetchMoreProducts}
								disabled={isLoading}
							>
								Show more
							</Button>
						</div>
					)}
				</>
			)}
			{isError && <ErrorMessage />}
		</>
	)
}
