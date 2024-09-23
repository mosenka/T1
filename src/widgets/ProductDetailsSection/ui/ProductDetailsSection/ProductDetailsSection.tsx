import { faker } from '@faker-js/faker'
import React from 'react'

import { Container } from '@shared/ui'
import { Gallery } from '@features/Gallery'
import { ProductDetailsInformation } from '@widgets/ProductDetailsInformation'

import img from '@shared/assets/img/product.png'

import styles from './ProductDetailsSection.module.scss'

const IMAGES_LIST = [
	{ src: img as string, alt: faker.lorem.words({ min: 3, max: 5 }) },
	{ src: img as string, alt: faker.lorem.words({ min: 3, max: 5 }) },
	{ src: img as string, alt: faker.lorem.words({ min: 3, max: 5 }) },
	{ src: img as string, alt: faker.lorem.words({ min: 3, max: 5 }) },
	{ src: img as string, alt: faker.lorem.words({ min: 3, max: 5 }) },
	{ src: img as string, alt: faker.lorem.words({ min: 3, max: 5 }) }
]

export const ProductDetailsSection: React.FC = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Gallery images={IMAGES_LIST} initMainIndex={0} />
				<ProductDetailsInformation />
			</Container>
		</section>
	)
}
