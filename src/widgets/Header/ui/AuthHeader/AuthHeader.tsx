import React from 'react'
import { Container, Logo } from '@shared/ui'

import styles from './AuthHeader.module.scss'

export const AuthHeader: React.FC = () => {
	return (
		<div>
			<Container className={styles.container}>
				<Logo />
			</Container>
		</div>
	)
}
