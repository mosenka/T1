import classNames from 'classnames'
import { HashLink } from 'react-router-hash-link'
import React from 'react'

import styles from './NavBar.module.scss'

interface NavBarPropsType {
	children?: React.ReactNode
	className?: string
}

export const NavBar: React.FC<NavBarPropsType> = ({ children, className }) => {
	return (
		<nav className={classNames(styles.wrapper, className)}>
			<HashLink smooth to="/#catalog" className={styles.link}>
				Catalog
			</HashLink>
			<HashLink smooth to="/#faq" className={styles.link}>
				FAQ
			</HashLink>
			{children}
		</nav>
	)
}
