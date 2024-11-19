import { Link } from 'react-router-dom'
import React from 'react'

import { Icon } from '@shared/ui'

import styles from './CartNavButton.module.scss'

interface CartNavButtonPropsType {
	count?: number
}

export const CartNavButton: React.FC<CartNavButtonPropsType> = ({ count = 0 }) => {
	return (
		<div className={styles.wrapper}>
			<Link to={'/cart'} className={styles.button}>
				<span className={styles.text}>Cart</span>
				<Icon icon={'iconCart'} width={20} className={styles.icon} />
				{count > 0 && <span className={styles.count}>{count > 99 ? '99+' : count}</span>}
			</Link>
		</div>
	)
}
