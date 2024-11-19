import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React, { ReactElement } from 'react'

import { AdaptiveImage } from '@shared/ui'

import { ProductListItemType } from '../../types/ProductListItemType'
import { discountedPriceAdapter } from '../../libs/utils/discountedPriceAdapter'

import styles from './ProductCard.module.scss'

interface ProductCardPropsType {
	product: ProductListItemType
	cartButton?: ReactElement
}

export const ProductCard: React.FC<ProductCardPropsType> = ({ product, cartButton }) => {
	const { id, title, thumbnail, price, discountPercentage } = product

	const discontedPrice = discountPercentage ? discountedPriceAdapter(price, discountPercentage) : price

	return (
		<article className={styles.wrapper}>
			<Link to={`/product/${id}`} className={styles.link} aria-label={`more about product ${name} `} />
			<AdaptiveImage alt={title} src={thumbnail} wrapperClassName={styles.imgWrapper} aspectRatio={'37 / 30'}>
				<span className={styles.hiddenText}>Show details</span>
			</AdaptiveImage>
			<div className={styles.body}>
				<div className={styles.desc}>
					<h4 className={classNames('text-bold text-m', styles.name)}>{title}</h4>
					<span className={classNames('text-l', styles.price)}>${discontedPrice}</span>
				</div>
				{cartButton && <div className={styles.button}>{cartButton}</div>}
			</div>
		</article>
	)
}
