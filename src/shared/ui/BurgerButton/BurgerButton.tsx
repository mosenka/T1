import React, { ButtonHTMLAttributes } from 'react'

import styles from './BurgerButton.module.scss'
import classNames from 'classnames'

interface BurgerButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	isOpen?: boolean
	className?: string
}

export const BurgerButton: React.FC<BurgerButtonPropsType> = ({ isOpen = false, className, ...props }) => {
	const buttonClasses = classNames(styles.button, { [styles.isOpen]: isOpen }, className)

	return (
		<button className={buttonClasses} {...props}>
			<span />
		</button>
	)
}
