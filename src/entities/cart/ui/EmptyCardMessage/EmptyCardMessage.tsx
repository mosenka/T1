import classNames from 'classnames'
import React from 'react'

import styles from './EmptyCardMessage.module.scss'

interface EmptyCardMessagePropsType {
	className?: string
}

export const EmptyCardMessage: React.FC<EmptyCardMessagePropsType> = ({ className }) => {
	return <p className={classNames(styles.text, className)}>No items</p>
}
