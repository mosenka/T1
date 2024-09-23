import React from 'react'

import { Container, Logo } from '@shared/ui'

import { NavBar } from '@features/NavBar'

import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container className={styles.container}>
				<Logo />
				<NavBar />
			</Container>
		</div>
	)
}
