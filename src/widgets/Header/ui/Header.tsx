import React, { useState } from 'react'

import { BurgerButton, Container, Logo } from '@shared/ui'

import { MobileNavBar, NavBar } from '@features/NavBar'

import { CartNavButton } from '@entities/cart'
import { UserName } from '@entities/user'

import styles from './Header.module.scss'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

const USER_NAME = 'Johnson Smith'
const CART_COUNT = 100

export const Header: React.FC = () => {
	const location = useLocation()
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	return (
		<div className={styles.wrapper}>
			<Container className={classNames(styles.container, { [styles.isBorder]: location?.pathname === '/' })}>
				<Logo />
				<NavBar className={styles.desktopNavBar}>
					<>
						<CartNavButton count={CART_COUNT} />
						<UserName name={USER_NAME} />
					</>
				</NavBar>
				<div className={styles.mobileNavBar}>
					<CartNavButton count={CART_COUNT} />
					<BurgerButton isOpen={isOpenMenu} onClick={() => setIsOpenMenu(!isOpenMenu)} />
				</div>
				<MobileNavBar isOpen={isOpenMenu} closeMenu={() => setIsOpenMenu(false)} />
			</Container>
		</div>
	)
}
