import classNames from 'classnames'
import React, { ReactElement } from 'react'

import { IconsNameType } from '../types/IconsNameType'
import { IconPaintingType } from '../types/IconPaintingType'

import styles from './Icon.module.scss'

type IconTypeProps = {
	icon: IconsNameType
	width: number
	height?: number
	paintingType?: IconPaintingType
	className?: string
}

const Icon: React.FC<IconTypeProps> & { paintingType: typeof IconPaintingType } = ({
	icon,
	width,
	height,
	paintingType = Icon.paintingType.Fill,
	className
}: IconTypeProps): ReactElement => {
	const iconClasses = classNames(styles.icon, styles[paintingType], className)

	return (
		<svg className={iconClasses} width={width} height={height ?? width} aria-hidden="true">
			<use href={`#${icon}`} />
		</svg>
	)
}

Icon.paintingType = IconPaintingType

export { Icon }
