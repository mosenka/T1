import classNames from 'classnames'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { BurgerButton, Container, Logo } from '@shared/ui'
import { useAppSelector } from '@shared/libs/hooks'

import { selectFullName } from '@entities/auth'
import { UserName } from '@entities/user'

import { MobileNavBar, NavBar } from '@features/NavBar'

import { CartStatusButton } from '@widgets/CartStatusButton'

import styles from './Header.module.scss'

export const Header: React.FC = () => {
	const fullName = useAppSelector(selectFullName)
	const location = useLocation()
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	return (
		<div className={styles.wrapper}>
			<Container className={classNames(styles.container, { [styles.isBorder]: location?.pathname === '/' })}>
				<Logo />
				<NavBar className={styles.desktopNavBar}>
					<>
						<CartStatusButton />
						{fullName && <UserName name={fullName} />}
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
