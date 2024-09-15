import React from 'react'

import styles from './ProductDetailsDescription.module.scss'

interface ProductDetailsDescriptionPropsType {
	children?: React.ReactNode
}

export const ProductDetailsDescription: React.FC<ProductDetailsDescriptionPropsType> = ({ children }) => {
	return <div className={styles.description}> {children}</div>
}
