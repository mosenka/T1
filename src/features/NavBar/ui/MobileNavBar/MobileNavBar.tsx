import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { HashLink } from 'react-router-hash-link'
import React, { useRef } from 'react'

import { Icon } from '@shared/ui'
import styles from './MobileNavBar.module.scss'

interface MobileNavBarPropsType {
	isOpen?: boolean
	closeMenu: () => void
	className?: string
	children?: React.ReactNode
}

export const MobileNavBar: React.FC<MobileNavBarPropsType> = ({ closeMenu, isOpen = false, children, className }) => {
	const wrapperClasses = classNames(styles.wrapper, className)
	const bodyClasses = classNames(styles.body, { [styles.isOpen]: isOpen }, { [styles.isHide]: !isOpen })

	const wrapperRef = useRef<HTMLDivElement>(null)

	return (
		<CSSTransition
			in={isOpen}
			timeout={500}
			classNames={{
				enterActive: styles.isOpen,
				exitActive: styles.isHide
			}}
			mountOnEnter
			unmountOnExit
			nodeRef={wrapperRef}
		>
			<div className={wrapperClasses} ref={wrapperRef}>
				<nav className={bodyClasses}>
					<HashLink
						smooth
						to="/#catalog"
						className={styles.link}
						onClick={() => closeMenu()}
						aria-label={'link to catalog section'}
					>
						Catalog
					</HashLink>
					<HashLink
						smooth
						to="/#faq"
						className={styles.link}
						onClick={() => closeMenu()}
						aria-label={'link to faq section'}
					>
						FAQ
					</HashLink>
					{children}
					<button className={styles.close} onClick={closeMenu} aria-label="Close menu">
						<Icon icon={'iconClose'} width={30} />
					</button>
				</nav>
			</div>
		</CSSTransition>
	)
}
