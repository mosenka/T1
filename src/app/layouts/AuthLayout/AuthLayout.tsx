import React from 'react'

import { Layout } from '@shared/ui'
import { AuthHeader } from '@widgets/Header'

import '../../styles/global.scss'

interface AuthLayoutPropsTypes {
	children: React.ReactNode
}

export const AuthLayout: React.FC<AuthLayoutPropsTypes> = ({ children }) => {
	return (
		<Layout>
			<Layout.HEADER>
				<AuthHeader />
			</Layout.HEADER>
			<Layout.MAIN>{children}</Layout.MAIN>
		</Layout>
	)
}
