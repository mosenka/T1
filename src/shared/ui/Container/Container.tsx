import classNames from 'classnames'
import React from 'react'

import styles from './Container.module.scss'

export interface ContainerPropsType {
	children: React.ReactNode
	className?: string
}

export const Container: React.FC<ContainerPropsType> = ({ children, className }) => {
	return <div className={classNames(styles.container, className)}>{children}</div>
}
