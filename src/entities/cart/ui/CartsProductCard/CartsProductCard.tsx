import classNames from 'classnames'
import { CartsProductResponseType } from 'entities/cart/types/CartsProductResponseType.ts'
import { Link } from 'react-router-dom'
import React, { ReactElement } from 'react'

import { AdaptiveImage } from '@shared/ui'

import styles from './CartsProductCard.module.scss'

interface CartsProductCardPropsType {
	product: CartsProductResponseType
	cartButton?: ReactElement
	isDeleted?: boolean
}

export const CartsProductCard: React.FC<CartsProductCardPropsType> = ({ product, cartButton, isDeleted }) => {
	const { id, title, price, thumbnail } = product
	return (
		<article className={classNames(styles.card, { [styles.isDeleted]: isDeleted })}>
			<div className={styles.body}>
				<AdaptiveImage src={thumbnail} alt={title} wrapperClassName={styles.imgWrapper} aspectRatio={'1 / 1'} />
				<div className={styles.desc}>
					<Link to={`/product/${id}`} className={classNames('text-bold text-m', styles.name)}>
						{title}
					</Link>
					<span className={classNames('text-l', styles.price)}>${price}</span>
				</div>
			</div>
			{cartButton && <div className={styles.button}>{cartButton}</div>}
		</article>
	)
}
