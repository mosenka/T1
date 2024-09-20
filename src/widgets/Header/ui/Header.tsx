import React, { useState } from 'react'

import { BurgerButton, Container, Logo } from '@shared/ui'

import { MobileNavBar, NavBar } from '@features/NavBar'

import { UserName } from '@entities/user'
import { CartStatusButton } from '@widgets/CartStatusButton'

import styles from './Header.module.scss'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

const USER_NAME = 'Johnson Smith'

export const Header: React.FC = () => {
	const location = useLocation()
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	return (
		<div className={styles.wrapper}>
			<Container className={classNames(styles.container, { [styles.isBorder]: location?.pathname === '/' })}>
				<Logo />
				<NavBar className={styles.desktopNavBar}>
					<>
						<CartStatusButton />
						<UserName name={USER_NAME} />
					</>
				</NavBar>
				<div className={styles.mobileNavBar}>
					<CartStatusButton />
					<BurgerButton isOpen={isOpenMenu} onClick={() => setIsOpenMenu(!isOpenMenu)} />
				</div>
				<MobileNavBar isOpen={isOpenMenu} closeMenu={() => setIsOpenMenu(false)} />
			</Container>
		</div>
	)
}
