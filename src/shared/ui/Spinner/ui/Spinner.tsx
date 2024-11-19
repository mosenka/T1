import classNames from 'classnames'
import React from 'react'

import { SpinnerSizes } from '../lib/SpinnerSizes'
import { SpinnerThemes } from '../lib/SpinnerThemes'

import styles from './Spinner.module.scss'

interface SpinnerPropsType {
	className?: string
	size?: SpinnerSizes
	theme?: SpinnerThemes
}

interface SpinnerExtendsType {
	SIZE: typeof SpinnerSizes
	THEME: typeof SpinnerThemes
}

export const Spinner: SpinnerExtendsType & React.FC<SpinnerPropsType> = ({
	size = SpinnerSizes.M,
	theme = SpinnerThemes.ORANGE,
	className
}: SpinnerPropsType) => {
	const spinnerClasses = classNames(styles.spinner, styles[size], styles[theme], className)

	return <span className={spinnerClasses} />
}

Spinner.SIZE = SpinnerSizes
Spinner.THEME = SpinnerThemes
