import classNames from 'classnames'
import React, { useMemo } from 'react'

import { Icon } from '@shared/ui'
import styles from './Raiting.module.scss'

type RatingCountType = 1 | 2 | 3 | 4 | 5

interface RaitingPropsType {
	count: RatingCountType
}

export const Raiting: React.FC<RaitingPropsType> = ({ count }) => {
	const starsList = useMemo(() => {
		const list = []

		for (let i = 1; i < 6; i++) {
			const elem = (
				<span className={classNames(styles.star, { [styles.isActive]: i <= count })}>
					<Icon icon={'iconStar'} width={20} />
				</span>
			)
			list.push(elem)
		}

		return list
	}, [count])

	return <div className={styles.wrapper}>{starsList}</div>
}
