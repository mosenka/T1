import React from 'react'
import { Skeleton } from '@shared/ui'

import styles from './ProductCardLoader.module.scss'

export const ProductCardLoader: React.FC = () => {
	return (
		<Skeleton className={styles.card}>
			<Skeleton.IMAGE />
			<div className={styles.body}>
				<Skeleton.TITLE />
				<Skeleton.TEXT className={styles.text} />
			</div>
		</Skeleton>
	)
}
