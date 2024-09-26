import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

import { checkAccessToken } from '@entities/auth'

type AuthProviderPropsTypes = {
	children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderPropsTypes> = ({ children }) => {
	const navigate = useNavigate()

	useEffect(() => {
		const isAuth = checkAccessToken()

		if (!isAuth) {
			navigate('/login')
		}
	}, [navigate])

	return <>{children}</>
}
