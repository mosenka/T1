import classNames from 'classnames'
import React, { ImgHTMLAttributes } from 'react'

import { ImageFillType } from '../libs/ImageFillType.ts'

import styles from './AdaptiveImage.module.scss'

interface AdaptiveImagePropsType extends ImgHTMLAttributes<HTMLImageElement> {
	aspectRatio?: string
	children?: React.ReactNode
	wrapperClassName?: string
	fillType?: ImageFillType
}

interface AdaptiveImageExtendsType {
	FILL_TYPE: typeof ImageFillType
}

export const AdaptiveImage: AdaptiveImageExtendsType & React.FC<AdaptiveImagePropsType> = ({
	children,
	aspectRatio = '1 / 1',
	wrapperClassName,
	fillType = ImageFillType.Width,
	...props
}) => {
	return (
		<div className={classNames(styles.wrapper, wrapperClassName)} style={{ aspectRatio: aspectRatio }}>
			<img alt={props.alt} className={classNames(styles.img, styles[fillType], props?.className)} {...props} />
			{children}
		</div>
	)
}

AdaptiveImage.FILL_TYPE = ImageFillType
