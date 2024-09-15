import React from 'react'

import { AdaptiveImage } from '@shared/ui'
import styles from './Gallery.module.scss'
import classNames from 'classnames'

interface GalleryPropsType {
	images: Array<{ src: string; alt: string }>
	initMainIndex?: number
	className?: string
}

export const Gallery: React.FC<GalleryPropsType> = ({ images, initMainIndex = 0, className }) => {
	const previewImagesList = images.map(({ src, alt }, index) => {
		const previewClasses = classNames(styles.img, styles.preview, { [styles.isActive]: index === initMainIndex })
		return <AdaptiveImage src={src} alt={alt} wrapperClassName={previewClasses} />
	})

	return (
		<div className={classNames(styles.wrapper, className)}>
			<AdaptiveImage
				wrapperClassName={styles.img}
				alt={images[initMainIndex]?.alt}
				src={images[initMainIndex]?.src}
				fillType={AdaptiveImage.FILL_TYPE.Height}
			/>
			<div className={styles.previewList}>{previewImagesList}</div>
		</div>
	)
}
