import React from 'react'

import { ProductDetailsTitle } from '../ProductDetailsTitle/ProductDetailsTitle'
import { ProductDetailsCategoryInfo } from '../ProductDetailsCategoryInfo/ProductDetailsCategoryInfo'
import { ProductDetailsRow } from '../ProductDetailsRow/ProductDetailsRow'
import { ProductDetailsHead } from '../ProductDetailsHead/ProductDetailsHead'
import { ProductDetailsDescription } from '../ProductDetailsDescription/ProductDetailsDescription'
import { ProductDetailsOtherInfo } from '../ProductDetailsOtherInfo/ProductDetailsOtherInfo'
import { ProductDetailsStockInfo } from '../ProductDetailsStockInfo/ProductDetailsStockInfo'

import styles from './ProductDetailsCard.module.scss'

interface ProductDetailsCardPropsType {
	children?: React.ReactNode
}

interface ProductDetailsCardExtendsType {
	TITLE: typeof ProductDetailsTitle
	HEAD: typeof ProductDetailsHead
	CATEGORY: typeof ProductDetailsCategoryInfo
	ROW: typeof ProductDetailsRow
	DESCRIPTION: typeof ProductDetailsDescription
	OTHER: typeof ProductDetailsOtherInfo
	STOCK: typeof ProductDetailsStockInfo
}

export const ProductDetailsCard: ProductDetailsCardExtendsType & React.FC<ProductDetailsCardPropsType> = ({
	children
}) => {
	return <article className={styles.card}>{children}</article>
}

ProductDetailsCard.TITLE = ProductDetailsTitle
ProductDetailsCard.HEAD = ProductDetailsHead
ProductDetailsCard.CATEGORY = ProductDetailsCategoryInfo
ProductDetailsCard.ROW = ProductDetailsRow
ProductDetailsCard.DESCRIPTION = ProductDetailsDescription
ProductDetailsCard.OTHER = ProductDetailsOtherInfo
ProductDetailsCard.STOCK = ProductDetailsStockInfo
