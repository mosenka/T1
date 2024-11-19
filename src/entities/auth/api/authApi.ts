import { commonApi } from '@shared/api'

import { LoginResponseType, LoginValuesType } from '@entities/auth/types'

export const authApi = commonApi.injectEndpoints({
	endpoints: build => ({
		signIn: build.mutation<LoginResponseType, LoginValuesType>({
			query: params => ({
				url: '/auth/login',
				method: 'POST',
				body: params
			}),
			transformResponse(response: LoginResponseType) {
				if (response?.accessToken) {
					localStorage.setItem('accessToken', response.accessToken)
				}
				return response
			},
			invalidatesTags: ['Login']
		}),
		getCurrentUser: build.query<LoginResponseType, void>({
			query: () => '/auth/me',
			providesTags: ['User']
		})
	})
})

export const { useSignInMutation, useLazyGetCurrentUserQuery } = authApi
