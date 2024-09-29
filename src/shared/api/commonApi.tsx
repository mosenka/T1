import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tags } from './tags'

export const commonApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	reducerPath: 'commonApi',
	tagTypes: tags,
	endpoints: () => ({})
})
