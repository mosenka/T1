import { type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { setTokenToHeaders } from './setTokenToHeaders'

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL,
	prepareHeaders: headers => {
		return setTokenToHeaders(headers)
	}
})
