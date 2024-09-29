import React from 'react'

import { Container, Skeleton } from '@shared/ui'

import styles from './ProductDetailsCardLoader.module.scss'

export const ProductDetailsCardLoader: React.FC = () => {
	return (
		<Container className={styles.container}>
			<Skeleton.IMAGE />
			<Skeleton>
				<Skeleton.TITLE />
				<Skeleton.TEXT />
				<Skeleton.TEXT />
				<Skeleton.TEXT />
				<Skeleton.TEXT />
				<Skeleton.TEXT />
				<Skeleton.TITLE className={styles.panel} />
			</Skeleton>
		</Container>
	)
}
