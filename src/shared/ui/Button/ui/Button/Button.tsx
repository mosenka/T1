import classNames from 'classnames'
import React, { ButtonHTMLAttributes, forwardRef } from 'react'

import { withStaticProps } from '@shared/types'

import { ButtonThemes } from '../../libs/ButtonThemes'
import { ButtonSizes } from '../../libs/ButtonSizes'

import styles from './Button.module.scss'

type ButtonPropsType = {
	theme?: ButtonThemes
	size?: ButtonSizes
} & ButtonHTMLAttributes<HTMLButtonElement>

const ButtonFunc: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonPropsType> = (
	{ theme = ButtonThemes.Orange, size = ButtonSizes.SM, ...props }: ButtonPropsType,
	ref
) => {
	const { className, children, ...attrs } = props

	const buttonClasses = classNames(styles.btn, styles[theme], styles[size], className)

	return (
		<button className={buttonClasses} {...attrs} ref={ref}>
			{children}
		</button>
	)
}

const Button = withStaticProps(forwardRef(ButtonFunc), {
	SIZE: ButtonSizes,
	THEME: ButtonThemes
})

export { Button }
