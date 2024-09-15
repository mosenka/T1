import React from 'react'

import styles from './ProductDetailsCategoryInfo.module.scss'

interface ProductDetailsCategoryInfoPropsType {
	text: string
}

export const ProductDetailsCategoryInfo: React.FC<ProductDetailsCategoryInfoPropsType> = ({ text }) => {
	return <span className={styles.category}>{text}</span>
}
