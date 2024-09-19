import { Link } from 'react-router-dom'
import React from 'react'
import { Button, Container, Heading } from '@shared/ui'

import styles from './ErrorPage.module.scss'

export const ErrorPage: React.FC = () => {
	return (
		<Container className={styles.container}>
			<div className={styles.inner}>
				<Heading Level={Heading.LEVEL.h1} className={styles.title}>
					404
				</Heading>
				<p>Страница не найдена</p>
				<Link to={'/'}>
					<Button size={Button.SIZE.XL}> Вернуться на главную</Button>
				</Link>
			</div>
		</Container>
	)
}
