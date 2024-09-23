import React from 'react'

import styles from './LayoutFooter.module.scss'
import classNames from "classnames";

interface LayoutFooterPropsType {
	children?: React.ReactNode
	className?: string
}

export const LayoutFooter: React.FC<LayoutFooterPropsType> = ({ children, className}) => {
	return (
		<footer className={classNames(styles.footer, className)}>{children}</footer>
	)
}
