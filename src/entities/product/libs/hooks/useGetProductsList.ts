import { useCallback, useEffect, useState } from 'react'

import { ProductResponseType, useLazySearchProductsQuery } from '@entities/product'

const LIMIT = 60

export const useGetProductsList = () => {
	const [trigger, { data, isLoading, isError }] = useLazySearchProductsQuery()

	const [productsList, setProductsList] = useState<Array<ProductResponseType>>([])

	useEffect(() => {
		trigger({ limit: LIMIT })
			.unwrap()
			.then(products => {
				setProductsList(products?.products)
			})
	}, [trigger])

	const fetchMoreProducts = useCallback(() => {
		let skip = 0
		if (data) {
			const { skip: initSkip, total } = data

			skip = initSkip + LIMIT <= total ? initSkip + LIMIT : total - initSkip + LIMIT
		}

		trigger({ limit: LIMIT, skip })
			.unwrap()
			.then(products => {
				const newList = products?.products
				setProductsList(prevState => [...prevState, ...newList])
			})
	}, [trigger, data])

	return { isLoading, isError, productsList, fetchMoreProducts }
}
