import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React, { ReactElement } from 'react'

import styles from './CartsProductCard.module.scss'

import { ProductType } from '@entities/product'

interface CartsProductCardPropsType {
	product: ProductType
	cartButton?: ReactElement
	isDeleted: boolean
}

export const CartsProductCard: React.FC<CartsProductCardPropsType> = ({ product, cartButton, isDeleted }) => {
	const { id, name, price, image } = product
	return (
		<article className={classNames(styles.card, { [styles.isDeleted]: isDeleted })}>
			<Link to={`/product/${id}`} className={styles.link} aria-label={`more about product ${name} `} />
			<div className={styles.body}>
				<div className={styles.imgWrapper}>
					<img className={styles.img} src={image} alt={name} />
				</div>
				<div className={styles.desc}>
					<h4 className={classNames('text-bold text-m', styles.name)}>{name}</h4>
					<span className={classNames('text-l', styles.price)}>${price}</span>
				</div>
			</div>
			{cartButton && <div className={styles.button}>{cartButton}</div>}
		</article>
	)
}
