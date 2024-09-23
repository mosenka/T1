import React from 'react'

import styles from './ProductDetailsRow.module.scss'

interface ProductDetailsRowPropsType {
	children?: React.ReactNode
}

export const ProductDetailsRow: React.FC<ProductDetailsRowPropsType> = ({ children }) => {
	return <div className={styles.row}>{children}</div>
}
