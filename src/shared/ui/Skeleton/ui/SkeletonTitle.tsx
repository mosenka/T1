import classNames from 'classnames'
import React from 'react'

import styles from './Skeleton.module.scss'

type SkeletonTitlePropsTypes = {
	className?: string
}

export const SkeletonTitle: React.FC<SkeletonTitlePropsTypes> = ({ className }) => {
	return <div className={classNames(styles.title, className)} />
}
