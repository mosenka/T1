import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@shared/libs/hooks'

import { getProductCountInCart, selectUpdateCartStates, updateCart } from '@entities/cart'

interface CartActionPropsTypes {
	productId: number
	totalCount?: number
}

export const useCartActions = ({ productId, totalCount }: CartActionPropsTypes) => {
	const { cart } = useAppSelector(selectUpdateCartStates)
	const [quantity, setQuantity] = useState<number>(0)

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isDisabledForAdd, setIsDisabledForAdd] = useState(false)
	const [isError, setIsError] = useState<boolean>(false)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!productId || !cart) return

		const count = getProductCountInCart(productId, cart)

		setQuantity(count ?? 0)

		return () => setQuantity(0)
	}, [productId, cart])

	useEffect(() => {
		if (totalCount == null) return
		setIsDisabledForAdd(totalCount <= quantity)
	}, [totalCount, quantity])

	const handlerUpdateCount = useCallback(
		async (count: number) => {
			const cartId = cart?.id
			if (!cartId) return

			const oldProductsList = cart?.products?.map(product => ({ id: product.id, quantity: product.quantity }))

			setIsLoading(true)
			setIsError(false)

			try {
				await dispatch(
					updateCart({
						cartId: cartId,
						products: [...oldProductsList, { id: productId, quantity: count }]
					})
				).unwrap()
			} catch (error) {
				console.error(error)
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		},
		[productId, cart, dispatch]
	)

	const handlerRemoveAll = useCallback(async () => {
		const cartId = cart?.id
		if (!cartId) return

		const oldProductsList = cart?.products?.map(product => ({ id: product.id, quantity: product.quantity }))

		setIsLoading(true)
		setIsError(false)

		try {
			await dispatch(
				updateCart({
					cartId: cartId,
					products: [...oldProductsList, { id: productId, quantity: 0 }]
				})
			).unwrap()
		} catch (error) {
			console.error(error)
			setIsError(true)
		} finally {
			setIsLoading(false)
		}
	}, [productId, cart, dispatch])

	return { isError, quantity, isLoading, isDisabledForAdd, handlerUpdateCount, handlerRemoveAll }
}
