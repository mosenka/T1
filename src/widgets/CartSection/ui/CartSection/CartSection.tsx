import React from 'react'

import { Container, Heading } from '@shared/ui'

import { CartsProductsList } from '@widgets/CartsProductsList'

import styles from './CartSection.module.scss'

export const CartSection: React.FC = () => {
	return (
		<section className={styles.section}>
			<Container>
				<Heading Level={Heading.LEVEL.h1} className={styles.title}>
					My cart
				</Heading>
				<CartsProductsList />
			</Container>
		</section>
	)
}
