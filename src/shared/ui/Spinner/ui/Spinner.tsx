import classNames from 'classnames'
import React from 'react'
import { SpinnerSizes } from '../lib/SpinnerSizes.ts'

import styles from './Spinner.module.scss'

interface SpinnerPropsType {
	className?: string
	size?: SpinnerSizes
}

interface SpinnerExtendsType {
	SIZE: typeof SpinnerSizes
}

export const Spinner: SpinnerExtendsType & React.FC<SpinnerPropsType> = ({
	size = SpinnerSizes.M,
	className
}: SpinnerPropsType) => {
	const spinnerClasses = classNames(styles.spinner, styles[size], className)

	return <span className={spinnerClasses} />
}

Spinner.SIZE = SpinnerSizes
