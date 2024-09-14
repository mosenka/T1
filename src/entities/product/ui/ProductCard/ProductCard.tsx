import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React, { ReactElement } from 'react'

import { ProductType } from '../../types/ProductType.ts'

import styles from './ProductCard.module.scss'

interface ProductCardPropsType {
	product: ProductType
	cartButton?: ReactElement
}

export const ProductCard: React.FC<ProductCardPropsType> = ({ product, cartButton }) => {
	const { id, name, price, image } = product

	return (
		<article className={styles.wrapper}>
			<Link to={`/product/${id}`} className={styles.link} aria-label={`more about product ${name} `} />
			<div className={styles.imgWrapper}>
				<img className={styles.img} src={image} alt={name} />
				<span className={styles.hiddenText}>Show details</span>
			</div>
			<div className={styles.body}>
				<div className={styles.desc}>
					<h4 className={classNames('text-bold text-m', styles.name)}>{name}</h4>
					<span className={classNames('text-l', styles.price)}>${price}</span>
				</div>
				{cartButton && <div className={styles.button}>{cartButton}</div>}
			</div>
		</article>
	)
}
