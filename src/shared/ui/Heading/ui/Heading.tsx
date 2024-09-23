import classNames from 'classnames'
import React from 'react'

import styles from './Heading.module.scss'

import { HeadingLevel } from '../lib/HeadingLevel'
import { HeadingWeight } from '../lib/HeadingWeight'
import { HeadingSizes } from '../lib/HeadingSizes'

interface HeadingPropsType {
	Level?: HeadingLevel
	children: React.ReactNode
	className?: string
	weight?: HeadingWeight
	size?: HeadingSizes
	isUppercase?: boolean
}

interface HeadingExtendsType {
	LEVEL: typeof HeadingLevel
	WEIGHT: typeof HeadingWeight
	SIZE: typeof HeadingSizes
}

export const Heading: HeadingExtendsType & React.FC<HeadingPropsType> = ({
	Level = HeadingLevel.h1,
	weight = HeadingWeight.bold,
	size = HeadingSizes.XL,
	children,
	isUppercase = false,
	className
}: HeadingPropsType) => {
	const headingClasses = classNames(
		styles.heading,
		styles[weight],
		{ [styles[size]]: size },
		{ [styles.isUppercase]: isUppercase },
		className
	)

	return <Level className={headingClasses}>{children}</Level>
}

Heading.LEVEL = HeadingLevel
Heading.WEIGHT = HeadingWeight
Heading.SIZE = HeadingSizes
