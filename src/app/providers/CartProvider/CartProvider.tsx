import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@shared/libs/hooks'

import { getAllAuthStates } from '@entities/auth'
import { fetchCartByUserID } from '@entities/cart'

interface CartProviderPropsTypes {
	children: React.ReactNode
}

export const CartProvider: React.FC<CartProviderPropsTypes> = ({ children }) => {
	const { isAuthenticated, userId } = useAppSelector(getAllAuthStates)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!isAuthenticated || !userId) return

		dispatch(fetchCartByUserID(userId))
	}, [dispatch, isAuthenticated, userId])

	return <>{children}</>
}
