import classNames from 'classnames'
import React from 'react'

import styles from './Skeleton.module.scss'

type SkeletonImagePropsTypes = {
	aspectRatio?: string
	className?: string
}

export const SkeletonImage: React.FC<SkeletonImagePropsTypes> = ({ aspectRatio = '1 / 1', className }) => {
	return <div className={classNames(styles.img, className)} style={{ aspectRatio: aspectRatio }} />
}
