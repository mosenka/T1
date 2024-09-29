import React, { ReactElement } from 'react'

import { discountedPriceAdapter } from '../../../../libs/utils/discountedPriceAdapter'

import styles from './PriceCard.module.scss'

interface PriceCardPropsType {
	price: number
	discountPercent?: number
	addToCartButton?: ReactElement
}

export const PriceCard: React.FC<PriceCardPropsType> = ({ price, discountPercent, addToCartButton }) => {
	const discountedPrice = discountPercent ? discountedPriceAdapter(price, discountPercent) : null

	return (
		<div className={styles.card}>
			<div className={styles.priceWrapper}>
				<span className={styles.price}>${discountedPrice ?? price}</span>
				{discountedPrice && <span className={styles.oldPrice}>${price}</span>}
			</div>
			{discountPercent && (
				<div className={styles.discount}>
					Your discount: <span className={'text-bold'}> {discountPercent}%</span>
				</div>
			)}
			{addToCartButton && <div className={styles.buttons}>{addToCartButton}</div>}
		</div>
	)
}
