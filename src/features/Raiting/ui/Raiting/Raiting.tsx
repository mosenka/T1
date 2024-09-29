import classNames from 'classnames'
import React, { useMemo } from 'react'

import { Icon } from '@shared/ui'
import styles from './Raiting.module.scss'

interface RaitingPropsType {
	count: number
}

export const Raiting: React.FC<RaitingPropsType> = ({ count }) => {
	if (count > 5) {
		throw new Error('Размер рейтинга не может превышать 5')
	}

	const starsList = useMemo(() => {
		const list = []

		for (let i = 1; i < 6; i++) {
			const elem = (
				<span key={i} className={classNames(styles.star, { [styles.isActive]: i <= Math.round(count) })}>
					<Icon icon={'iconStar'} width={20} />
				</span>
			)
			list.push(elem)
		}

		return list
	}, [count])

	return <div className={styles.wrapper}>{starsList}</div>
}
