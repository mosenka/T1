import React from 'react'

import { Container, Heading } from '@shared/ui'
import { ProductsList } from '@widgets/ProductsList'
import { SearchProductsInput } from '@entities/product'

import styles from './CatalogSection.module.scss'

export const CatalogSection: React.FC = () => {
	return (
		<section className={styles.section} id={'catalog'}>
			<Container>
				<Heading Level={Heading.LEVEL.h1} className={styles.title}>
					Catalog
				</Heading>
				<div className={styles.inputWrapper}>
					<SearchProductsInput />
				</div>
				<ProductsList />
			</Container>
		</section>
	)
}
