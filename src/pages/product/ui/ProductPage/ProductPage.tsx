import { useParams } from 'react-router-dom'
import React from 'react'

import { ProductDetailsSection } from '@widgets/ProductDetailsSection'
import { PageTitle } from '@shared/ui'
import { useGetProductByIdQuery } from '@entities/product'

export const ProductPage: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const { data } = useGetProductByIdQuery(id ?? '')

	return (
		<>
			<PageTitle title={data?.title ?? ''} />
			<ProductDetailsSection />
		</>
	)
}
