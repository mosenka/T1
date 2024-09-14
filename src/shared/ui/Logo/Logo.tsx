import classNames from 'classnames'
import { Link } from 'react-router-dom'
import React from 'react'

import styles from './Logo.module.scss'

export const Logo: React.FC = () => {
	return (
		<Link to="/" className={classNames('text-2xl text-bold', styles.logo)}>
			Goods4you
		</Link>
	)
}
