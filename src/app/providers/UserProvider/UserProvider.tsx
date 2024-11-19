import React, { useEffect } from 'react'

import { useAppSelector } from '@shared/libs/hooks'
import { checkAccessToken, getAllAuthStates } from '@entities/auth'
import { useLazyGetCurrentUserQuery } from '@entities/auth/api'

type UserProviderPropsTypes = {
	children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderPropsTypes> = ({ children }) => {
	const { isAuthenticated } = useAppSelector(getAllAuthStates)

	const [getCurrentUser] = useLazyGetCurrentUserQuery()

	useEffect(() => {
		const isToken = checkAccessToken()

		if (isToken && isAuthenticated) return

		if (isToken && !isAuthenticated) {
			getCurrentUser()
		}
	}, [isAuthenticated, getCurrentUser])

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === 'accessToken') {
				if (!event.newValue) {
					window.location.href = import.meta.env.VITE_LOGIN_URL
				}
			}
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	return <>{children}</>
}
