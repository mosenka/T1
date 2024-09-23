import React from 'react'

import { Container, Button } from '@shared/ui'

import styles from './Banner.module.scss'
import { HashLink } from 'react-router-hash-link'

export const Banner: React.FC = () => {
	return (
		<article className={styles.banner}>
			<Container className={styles.container}>
				<div className={styles.inner}>
					<p className={styles.title}>Any products from famous brands with worldwide delivery</p>
					<p className={styles.desc}>
						We sell smartphones, laptops, clothes, shoes and many other products at low prices
					</p>
					<HashLink smooth to={'/#catalog'}>
						<Button size={Button.SIZE.XL} aria-label={'Go to shopping'}>
							Go to shopping
						</Button>
					</HashLink>
				</div>
				<span className={styles.backText}>Goods4you</span>
			</Container>
		</article>
	)
}
