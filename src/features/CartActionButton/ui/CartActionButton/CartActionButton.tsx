import React from 'react'

import { ErrorMessage } from '@shared/ui'

import { AddToCartButton, AddToCartButtonSizes } from '@entities/cart'
import { useCartActions } from '../../libs/hooks/useCartActions'

type CartActionButtonPropsTypes = {
	productId: number
	totalCount?: number
	size?: AddToCartButtonSizes
}

export const CartActionButton: React.FC<CartActionButtonPropsTypes> = ({ productId, totalCount, size }) => {
	const { isError, quantity, isLoading, isDisabledForAdd, handlerUpdateCount } = useCartActions({
		productId,
		totalCount
	})

	if (isError) {
		return <ErrorMessage text={'ошибка'} />
	}

	return (
		<AddToCartButton
			size={size}
			count={quantity}
			isLoading={isLoading}
			removeItemHandler={() => handlerUpdateCount(quantity - 1)}
			addItemHandler={() => handlerUpdateCount(quantity + 1)}
			isDisabledForAdd={isDisabledForAdd}
		/>
	)
}
