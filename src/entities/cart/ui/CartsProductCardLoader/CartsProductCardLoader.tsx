import React from 'react'
import { Skeleton } from '@shared/ui'

import styles from './CartsProductCardLoader.module.scss'

export const CartsProductCardLoader: React.FC = () => {
	return (
		<Skeleton className={styles.card}>
			<Skeleton.IMAGE className={styles.img} aspectRatio={'1 / 1'} />
			<div className={styles.body}>
				<Skeleton.TITLE />
				<Skeleton.TEXT />
			</div>
		</Skeleton>
	)
}
