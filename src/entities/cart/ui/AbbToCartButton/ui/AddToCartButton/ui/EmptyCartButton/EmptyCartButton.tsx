import React, { ButtonHTMLAttributes } from 'react'

import { Button, Icon } from '@shared/ui'

import { AddToCartButtonSizes } from '../../libs/AddToCartButtonSizes'

interface EmptyCartButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: AddToCartButtonSizes
}

export const EmptyCartButton: React.FC<EmptyCartButtonPropsType> = ({ size = AddToCartButtonSizes.M, ...props }) => {
	switch (size) {
		case AddToCartButtonSizes.M: {
			return (
				<Button aria-label={'add to cart'} type={'button'} {...props}>
					<Icon icon={'iconCart'} width={18} />
				</Button>
			)
		}
		case AddToCartButtonSizes.XL: {
			return (
				<Button size={Button.SIZE.XL} type={'button'} {...props}>
					Add to cart
				</Button>
			)
		}
		default: {
			return null
		}
	}
}
