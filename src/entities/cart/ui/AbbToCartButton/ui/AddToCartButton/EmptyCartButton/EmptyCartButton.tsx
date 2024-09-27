import classNames from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'

import { Button, Icon, Spinner } from '@shared/ui'

import { AddToCartButtonSizes } from '../../../libs/AddToCartButtonSizes'

import styles from './EmptyCartButton.module.scss'

interface EmptyCartButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: AddToCartButtonSizes
	isLoading?: boolean
}

export const EmptyCartButton: React.FC<EmptyCartButtonPropsType> = ({
	size = AddToCartButtonSizes.M,
	isLoading = false,
	...props
}) => {
	switch (size) {
		case AddToCartButtonSizes.M: {
			return (
				<Button type={'button'} {...props}>
					{!isLoading && <Icon icon={'iconCart'} width={18} />}
					{isLoading && <Spinner size={Spinner.SIZE.XS} theme={Spinner.THEME.WHITE} />}
				</Button>
			)
		}
		case AddToCartButtonSizes.XL: {
			return (
				<Button
					size={Button.SIZE.XL}
					type={'button'}
					{...props}
					className={classNames(styles.button, styles[size], props.className)}
				>
					{isLoading && <Spinner size={Spinner.SIZE.XS} theme={Spinner.THEME.WHITE} />}
					{!isLoading && 'Add to cart'}
				</Button>
			)
		}
		default: {
			return null
		}
	}
}
