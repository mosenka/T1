import classNames from 'classnames'
import * as React from 'react'

import styles from './ErrorMessage.module.scss'

interface ErrorMessagePropsType {
	text?: string
	className?: string
}

export const ErrorMessage: React.FC<ErrorMessagePropsType> = ({ text, className }) => {
	return <p className={classNames(styles.message, className)}>{text ?? 'ошибка получения данных'}</p>
}
