import React from 'react'

import styles from './ProductDetailsStockInfo.module.scss'

interface ProductDetailsStockInfoPropsType {
	text: string
}

export const ProductDetailsStockInfo: React.FC<ProductDetailsStockInfoPropsType> = ({ text }) => {
	return <p className={styles.stock}>{text}</p>
}
