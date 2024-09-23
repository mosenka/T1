import React from 'react'

import { Container, Input, Heading } from '@shared/ui'
import { ProductsList } from '@widgets/ProductsList'

import styles from './CatalogSection.module.scss'

export const CatalogSection: React.FC = () => {
	return (
		<section className={styles.section} id={'catalog'}>
			<Container>
				<Heading Level={Heading.LEVEL.h1} className={styles.title}>
					Catalog
				</Heading>
				<div className={styles.inputWrapper}>
					<Input
						placeholder={'Search by title'}
						type={'text'}
						sizing={Input.SIZING.XL}
						aria-label="Search by title"
					/>
				</div>
				<ProductsList />
			</Container>
		</section>
	)
}
