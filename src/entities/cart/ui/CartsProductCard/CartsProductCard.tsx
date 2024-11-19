import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React, { ReactElement } from 'react'

import { AdaptiveImage } from '@shared/ui'
import { CartsProductResponseType } from '@entities/cart/types'
import { discountedPriceAdapter } from '@entities/product'

import styles from './CartsProductCard.module.scss'

interface CartsProductCardPropsType {
	product: CartsProductResponseType
	cartButton?: ReactElement
	isDeleted?: boolean
}

export const CartsProductCard: React.FC<CartsProductCardPropsType> = ({ product, cartButton, isDeleted }) => {
	const { id, title, price, thumbnail, discountPercentage } = product

	const discontedPrice = discountPercentage ? discountedPriceAdapter(price, discountPercentage) : price

	return (
		<article className={classNames(styles.card, { [styles.isDeleted]: isDeleted })}>
			<div className={styles.body}>
				<AdaptiveImage src={thumbnail} alt={title} wrapperClassName={styles.imgWrapper} aspectRatio={'1 / 1'} />
				<div className={styles.desc}>
					<Link to={`/product/${id}`} className={classNames('text-bold text-m', styles.name)}>
						{title}
					</Link>
					<span className={classNames('text-l', styles.price)}>${discontedPrice}</span>
				</div>
			</div>
			{cartButton && <div className={styles.button}>{cartButton}</div>}
		</article>
	)
}
