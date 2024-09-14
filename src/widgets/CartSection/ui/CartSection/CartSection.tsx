import React from 'react'

import { Container, Heading } from '@shared/ui'

import { CartsProductsList } from '@widgets/CartsProductsList'
import { TotalSummaryCard } from '@entities/cart'

import styles from './CartSection.module.scss'

export const CartSection: React.FC = () => {
	return (
		<section className={styles.section}>
			<Container>
				<Heading Level={Heading.LEVEL.h1} className={styles.title}>
					My cart
				</Heading>
				<div className={styles.content}>
					<CartsProductsList />
					<TotalSummaryCard count={3} price={700} totalPrice={590} />
				</div>
			</Container>
		</section>
	)
}
