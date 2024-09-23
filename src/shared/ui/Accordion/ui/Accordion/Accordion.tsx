import classNames from 'classnames'
import React, { useState } from 'react'

import { Icon } from '@shared/ui'

import styles from './Accordion.module.scss'

export interface AccordionPropsType {
	heading: string
	children: React.ReactNode
}

export const Accordion: React.FC<AccordionPropsType> = ({ heading, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const headClasses = classNames('text-xl', styles.head, { [styles.isOpen]: isOpen })
	const contentClasses = classNames('text-m text-semi-bold', styles.content, {
		[styles.isHidden]: !isOpen
	})

	return (
		<div className={styles.wrapper}>
			<button className={headClasses} onClick={() => setIsOpen(!isOpen)} aria-label={`open ${heading}`}>
				<h2 className={styles.headText}>{heading}</h2>
				<span className={styles.arrow} aria-hidden>
					<Icon icon={'iconClose'} width={24} className={styles.icon} />
				</span>
			</button>
			<div className={contentClasses}>
				<div className={styles.inner}>{children}</div>
			</div>
		</div>
	)
}
