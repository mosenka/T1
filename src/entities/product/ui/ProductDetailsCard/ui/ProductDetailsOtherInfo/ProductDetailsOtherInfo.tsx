import React from 'react'

import styles from './ProductDetailsOtherInfo.module.scss'

interface ProductDetailsOtherInfoPropsType {
	children?: React.ReactNode
}

export const ProductDetailsOtherInfo: React.FC<ProductDetailsOtherInfoPropsType> = ({ children }) => {
	return <div className={styles.other}>{children}</div>
}
