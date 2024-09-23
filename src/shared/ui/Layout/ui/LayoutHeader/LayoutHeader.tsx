import React from 'react'

import styles from './LayoutHeader.module.scss'
import classNames from "classnames";

interface LayoutHeaderPropsType {
	children?: React.ReactNode
	className?: string
}

export const LayoutHeader: React.FC<LayoutHeaderPropsType> = ({ children, className }) => {
	return <header className={classNames(styles.header, className)}>{children}</header>
}
