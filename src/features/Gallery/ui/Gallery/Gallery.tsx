import classNames from 'classnames'
import React from 'react'

import { AdaptiveImage } from '@shared/ui'
import { getRandomUUID } from '@shared/libs/utils'
import styles from './Gallery.module.scss'

interface GalleryPropsType {
	images: Array<{ src: string; alt: string }>
	initMainIndex?: number
	className?: string
}

export const Gallery: React.FC<GalleryPropsType> = ({ images, initMainIndex = 0, className }) => {
	const [mainIndex, setMainIndex] = React.useState(initMainIndex)

	const previewImagesList = images.map(({ src, alt }, index) => {
		const key = getRandomUUID()
		const previewClasses = classNames(styles.img, styles.preview, { [styles.isActive]: index === mainIndex })
		return (
			<AdaptiveImage
				src={src}
				alt={alt}
				wrapperClassName={previewClasses}
				key={key}
				onClick={() => setMainIndex(index)}
			/>
		)
	})

	return (
		<div className={classNames(styles.wrapper, className)}>
			<AdaptiveImage
				wrapperClassName={styles.img}
				alt={images[mainIndex]?.alt}
				src={images[mainIndex]?.src}
				fillType={AdaptiveImage.FILL_TYPE.Height}
			/>
			{images?.length > 1 && <div className={styles.previewList}>{previewImagesList}</div>}
		</div>
	)
}
