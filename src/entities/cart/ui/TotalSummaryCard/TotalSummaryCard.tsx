import React from 'react'

import styles from './TotalSummaryCard.module.scss'
import classNames from 'classnames'

interface TotalSummaryCardPropsType {
	count: number
	price: number
	totalPrice: number
}

export const TotalSummaryCard: React.FC<TotalSummaryCardPropsType> = ({ count, totalPrice, price }) => {
	return (
		<div className={styles.card}>
			<div className={styles.body}>
				<p className={styles.row}>
					<span className={classNames('text-l', styles.name)}>Total count</span>
					<span className={classNames('text-l', styles.value)}>{count} items</span>
				</p>
				<p className={styles.row}>
					<span className={classNames('text-l text-semi-bold', styles.name)}>Price without discount</span>
					<span className={classNames('text-semi-bold text-l', styles.value)}>${price}</span>
				</p>
			</div>
			<p className={classNames(styles.row, styles.isTotal)}>
				<span className={classNames('text-xl text-bold', styles.name)}>Total price</span>
				<span className={classNames('text-xl text-bold', styles.value)}>${totalPrice}</span>
			</p>
		</div>
	)
}
