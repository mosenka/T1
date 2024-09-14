import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from '@shared/ui'

import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

import '../../styles/global.scss'

export const BaseLayout: React.FC = () => {
	return (
		<Layout>
			<Layout.HEADER>
				<Header />
			</Layout.HEADER>
			<Layout.MAIN>
				<Outlet />
			</Layout.MAIN>
			<Layout.FOOTER>
				<Footer />
			</Layout.FOOTER>
		</Layout>
	)
}
