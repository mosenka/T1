import React, { ReactElement } from 'react'

import { LayoutHeader } from '../LayoutHeader/LayoutHeader'
import { LayoutFooter } from '../LayoutFooter/LayoutFooter'
import { LayoutMain } from '../LayoutMain/LayoutMain'

import styles from './Layout.module.scss'

interface LayoutPropsType {
	children: React.ReactNode
}

interface LayoutExtendsType {
	HEADER: typeof LayoutHeader
	MAIN: typeof LayoutMain
	FOOTER: typeof LayoutFooter
}

export const Layout: LayoutExtendsType & React.FC<LayoutPropsType> = ({ children }: LayoutPropsType): ReactElement => {
	return <div className={styles.layout}>{children}</div>
}

Layout.HEADER = LayoutHeader
Layout.MAIN = LayoutMain
Layout.FOOTER = LayoutFooter
