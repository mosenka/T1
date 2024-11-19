import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './baseQueryWithReauth'
import { tags } from './tags'

export const commonApi = createApi({
	baseQuery: baseQueryWithReauth,
	reducerPath: 'commonApi',
	tagTypes: tags,
	endpoints: () => ({})
})
