import React, { useEffect } from 'react'

import { useAppDispatch } from '@shared/libs/hooks'

import { fetchCartByUserID } from '@entities/cart'

interface CartProviderPropsTypes {
	children: React.ReactNode
}

const USER_ID = 11

export const CartProvider: React.FC<CartProviderPropsTypes> = ({ children }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCartByUserID(USER_ID))
	}, [dispatch])

	return <>{children}</>
}
