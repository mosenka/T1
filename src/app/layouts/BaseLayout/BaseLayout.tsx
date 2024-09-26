import React from 'react'

import { Layout } from '@shared/ui'

import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

import '../../styles/global.scss'

interface BaseLayoutPropsTypes {
	children: React.ReactNode
}

export const BaseLayout: React.FC<BaseLayoutPropsTypes> = ({ children }) => {
	return (
		<Layout>
			<Layout.HEADER>
				<Header />
			</Layout.HEADER>
			<Layout.MAIN>{children}</Layout.MAIN>
			<Layout.FOOTER>
				<Footer />
			</Layout.FOOTER>
		</Layout>
	)
}
