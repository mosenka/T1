import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useMemo } from 'react'

import { Container, ErrorMessage } from '@shared/ui'

import { ProductDetailsCardLoader, useGetProductByIdQuery } from '@entities/product'

import { Gallery } from '@features/Gallery'

import { ProductDetailsInformation } from '@widgets/ProductDetailsInformation'

import styles from './ProductDetailsSection.module.scss'

export const ProductDetailsSection: React.FC = () => {
	const navigate = useNavigate()
	let { id } = useParams<{ id: string }>()
	const { data: product, isLoading, isError, error } = useGetProductByIdQuery(id ?? '')

	useEffect(() => {
		if (!error) return

		if ('status' in error && error?.status === 404) {
			navigate('/error')
		}
	}, [error, navigate])

	const imagesList = useMemo(() => {
		if (!product) return []

		return product.images.map((image, index) => ({
			src: image,
			alt: `image number ${index + 1} for ${product.title}`
		}))
	}, [product])

	if (isError && 'status' in error && error?.status !== 404) {
		return <ErrorMessage />
	}

	if (isLoading) {
		return (
			<section className={styles.section}>
				<ProductDetailsCardLoader />
			</section>
		)
	}

	if (product) {
		return (
			<section className={styles.section}>
				<Container className={styles.container}>
					<Gallery images={imagesList} initMainIndex={0} />
					<ProductDetailsInformation product={product} />
				</Container>
			</section>
		)
	}

	return null
}
