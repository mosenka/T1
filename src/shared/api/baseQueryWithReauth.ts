import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { baseQuery } from './baseQuery'

import { clearAuthState } from '@entities/auth'

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions
) => {
	const result = await baseQuery(args, api, extraOptions)

	if (result.error && result.error.status === 401) {
		api.dispatch(clearAuthState())
		localStorage.removeItem('accessToken')
		window.location.href = import.meta.env.VITE_LOGIN_URL
	}

	return result
}
