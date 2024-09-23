import React, { ReactElement } from 'react'

import styles from './PriceCard.module.scss'

interface PriceCardPropsType {
	price: number
	discount?: string
	discountedPrice?: number
	addToCartButton?: ReactElement
}

export const PriceCard: React.FC<PriceCardPropsType> = ({ price, discount, discountedPrice, addToCartButton }) => {
	return (
		<div className={styles.card}>
			<div className={styles.priceWrapper}>
				<span className={styles.price}>${discountedPrice ?? price}</span>
				{discountedPrice && <span className={styles.oldPrice}>${price}</span>}
			</div>
			{discount && (
				<div className={styles.discount}>
					Your discount: <span className={'text-bold'}> {discount}</span>
				</div>
			)}
			{addToCartButton && <div className={styles.buttons}>{addToCartButton}</div>}
		</div>
	)
}
