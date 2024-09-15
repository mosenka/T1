import React from 'react'

import { Heading } from '@shared/ui'
import styles from './ProductDetailsTitle.module.scss'

interface ProductDetailsTitlePropsType {
	title: string
}

export const ProductDetailsTitle: React.FC<ProductDetailsTitlePropsType> = ({ title }) => {
	return (
		<Heading Level={Heading.LEVEL.h1} className={styles.title}>
			{title}
		</Heading>
	)
}
