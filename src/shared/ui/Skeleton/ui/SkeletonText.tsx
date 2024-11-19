import classNames from 'classnames'
import React from 'react'

type SkeletonTextPropsTypes = {
	className?: string
}

import styles from './Skeleton.module.scss'

export const SkeletonText: React.FC<SkeletonTextPropsTypes> = ({ className }) => {
	return <div className={classNames(className, styles.text)} />
}
