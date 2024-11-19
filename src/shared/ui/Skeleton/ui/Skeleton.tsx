import classNames from 'classnames'
import React from 'react'

import { SkeletonImage } from './SkeletonImage.tsx'
import { SkeletonTitle } from './SkeletonTitle'
import { SkeletonText } from './SkeletonText'

import styles from './Skeleton.module.scss'

interface SkeletonPropsTypes {
	children: React.ReactNode
	className?: string
}

interface SkeletonExtendsTypes {
	IMAGE: typeof SkeletonImage
	TEXT: typeof SkeletonText
	TITLE: typeof SkeletonTitle
}

export const Skeleton: SkeletonExtendsTypes & React.FC<SkeletonPropsTypes> = ({ children, className }) => {
	return <div className={classNames(styles.card, className)}>{children}</div>
}

Skeleton.IMAGE = SkeletonImage
Skeleton.TITLE = SkeletonTitle
Skeleton.TEXT = SkeletonText
