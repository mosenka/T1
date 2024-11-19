import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { authApi } from '@entities/auth/api'
import { LoginResponseType } from '@entities/auth/types'

interface InitialStateTypes {
	isAuthenticated: boolean
	username: string | null
	fullName: string | null
	userId: number | null
}

const initialState: InitialStateTypes = {
	isAuthenticated: false,
	username: null,
	fullName: null,
	userId: null
}

const setAuthenticatedUser = (state: InitialStateTypes, action: PayloadAction<LoginResponseType>) => {
	state.isAuthenticated = true

	const { username, firstName, lastName, id } = action.payload

	if (state.isAuthenticated) {
		state.username = username
		state.fullName = `${firstName} ${lastName}`
		state.userId = id
	}
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearAuthState: state => {
			state.isAuthenticated = false
			state.username = null
			state.fullName = null
			state.userId = null
		}
	},
	extraReducers: builder => {
		builder
			.addMatcher(authApi.endpoints.signIn.matchFulfilled, setAuthenticatedUser)
			.addMatcher(authApi.endpoints.getCurrentUser.matchFulfilled, setAuthenticatedUser)
	}
})
