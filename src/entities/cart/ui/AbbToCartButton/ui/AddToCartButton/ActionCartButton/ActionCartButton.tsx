import classNames from 'classnames'

import React, { ButtonHTMLAttributes } from 'react'

import { Button, Icon, IconsNameType } from '@shared/ui'

import { AddToCartButtonSizes } from '../../../libs/AddToCartButtonSizes'

import styles from './ActionCartButton.module.scss'

interface ActionCartButtonPropsTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: AddToCartButtonSizes
	icon: Extract<IconsNameType, 'iconMinus' | 'iconPlus'>
}

export const ActionCartButton: React.FC<ActionCartButtonPropsTypes> = ({ size, icon, ...props }) => {
	switch (size) {
		case AddToCartButtonSizes.M: {
			return (
				<Button size={Button.SIZE.SM} type={'button'} {...props}>
					<Icon icon={icon} width={18} className={classNames(styles.icon, styles[size])} />
				</Button>
			)
		}
		case AddToCartButtonSizes.XL: {
			return (
				<Button size={Button.SIZE.MD} type={'button'} {...props}>
					<Icon icon={icon} width={30} className={classNames(styles.icon, styles[size])} />
				</Button>
			)
		}
		default: {
			return null
		}
	}
}
