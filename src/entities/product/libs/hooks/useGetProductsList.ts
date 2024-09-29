import { useCallback, useEffect, useState } from 'react'

import { getAllProductsStates, ProductResponseType, useLazySearchProductsQuery } from '@entities/product'
import { useAppSelector } from '@shared/libs/hooks'

const LIMIT = 12

export const useGetProductsList = () => {
	const [trigger, { data, isFetching, isError }] = useLazySearchProductsQuery()
	const { queryString } = useAppSelector(getAllProductsStates)

	const [isHideButton, setHideButton] = useState<boolean>(false)
	const [productsList, setProductsList] = useState<Array<ProductResponseType>>([])

	useEffect(() => {
		if (queryString == null) return

		trigger({ limit: LIMIT, q: queryString })
			.unwrap()
			.then(products => {
				setProductsList(products?.products)
			})
	}, [queryString, trigger])

	useEffect(() => {
		if (!data) return

		const { skip, total, limit } = data

		if (skip + limit === total) {
			setHideButton(true)
		}

		return () => setHideButton(false)
	}, [data])

	useEffect(() => {
		trigger({ limit: LIMIT, q: '' })
			.unwrap()
			.then(products => {
				setProductsList(products?.products)
			})
	}, [trigger])

	const fetchMoreProducts = useCallback(() => {
		const initSkip = data?.skip ?? 0
		const skip = initSkip + LIMIT

		trigger({ limit: LIMIT, skip, q: queryString })
			.unwrap()
			.then(products => {
				const newList = products?.products
				setProductsList(prevState => [...prevState, ...newList])
			})
	}, [trigger, data, queryString])

	return { isLoading: isFetching, isError, productsList, fetchMoreProducts, isHideButton }
}
