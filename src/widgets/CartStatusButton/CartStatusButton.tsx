import React, { memo } from 'react'

import { useAppSelector } from '@shared/libs/hooks'

import { ErrorMessage, Spinner } from '@shared/ui'
import { CartNavButton, getCartStates } from '@entities/cart'

export const CartStatusButton: React.FC = memo(() => {
	const { isLoading, cartsList, isError } = useAppSelector(getCartStates)

	if (isLoading) {
		return <Spinner size={Spinner.SIZE.XS} />
	}

	if (isError) {
		return <ErrorMessage text={'Ошибка'} />
	}

	if (cartsList) {
		return <CartNavButton count={cartsList.carts?.[0]?.totalQuantity} />
	}
})

CartStatusButton.displayName = 'CartStatusButton'
