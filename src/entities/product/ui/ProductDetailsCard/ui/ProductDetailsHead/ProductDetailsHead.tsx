import React from 'react'

import styles from './ProductDetailsHead.module.scss'

interface ProductDetailsHeadPropsType {
	children?: React.ReactNode
}

export const ProductDetailsHead: React.FC<ProductDetailsHeadPropsType> = ({ children }) => {
	return <div className={styles.head}>{children}</div>
}
