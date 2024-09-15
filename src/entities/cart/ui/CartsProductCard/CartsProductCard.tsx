import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React, { ReactElement } from 'react'

import { AdaptiveImage } from '@shared/ui'

import { ProductType } from '@entities/product'

import styles from './CartsProductCard.module.scss'

interface CartsProductCardPropsType {
	product: ProductType
	cartButton?: ReactElement
	isDeleted: boolean
}

export const CartsProductCard: React.FC<CartsProductCardPropsType> = ({ product, cartButton, isDeleted }) => {
	const { id, name, price, image } = product
	return (
		<article className={classNames(styles.card, { [styles.isDeleted]: isDeleted })}>
			<div className={styles.body}>
				<AdaptiveImage src={image} alt={name} wrapperClassName={styles.imgWrapper} aspectRatio={'1 / 1'} />
				<div className={styles.desc}>
					<Link to={`/product/${id}`} className={classNames('text-bold text-m', styles.name)}>
						{name}
					</Link>
					<span className={classNames('text-l', styles.price)}>${price}</span>
				</div>
			</div>
			{cartButton && <div className={styles.button}>{cartButton}</div>}
		</article>
	)
}
