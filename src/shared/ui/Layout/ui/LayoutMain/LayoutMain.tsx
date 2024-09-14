import React from 'react'

import styles from './LayoutMain.module.scss'
import classNames from "classnames";

interface LayoutMainPropsType {
	children?: React.ReactNode
	className?: string
}

export const LayoutMain: React.FC<LayoutMainPropsType> = ({children, className}) => {
	return <main className={classNames(styles.main, className)}> { children }</main>
}
