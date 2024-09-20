import React from 'react'

import styles from './CardSkeleton.module.scss'

export const CardSkeleton: React.FC = () => {
	return (
		<div className={styles.card}>
			<div className={styles.img} />
			<div className={styles.body}>
				<div className={styles.title} />
				<div className={styles.text} />
			</div>
		</div>
	)
}
