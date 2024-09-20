import { createSlice } from '@reduxjs/toolkit'

import { CartsListResponseType } from '@entities/cart'
import { fetchCartByUserID } from '@entities/cart/api'

interface InitialStateTypes {
	isLoading: boolean
	cartsList: CartsListResponseType | null
	isError: boolean
	error: string | null
}

const initialState: InitialStateTypes = {
	isLoading: false,
	cartsList: null,
	isError: false,
	error: null
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCartByUserID.pending, state => {
				state.isError = false
				state.isLoading = true
				state.error = null
				state.cartsList = null
			})
			.addCase(fetchCartByUserID.fulfilled, (state, action) => {
				state.isError = false
				state.error = null
				state.isLoading = false
				state.cartsList = action.payload
			})
			.addCase(fetchCartByUserID.rejected, (state, action) => {
				state.isError = true
				state.isLoading = false
				state.error = action.payload ?? 'Ошибка загрузки данных'
				state.cartsList = null
			})
	}
})
