import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartsListResponseType, CartResponseType } from '@entities/cart'
import { fetchCartByUserID } from '@entities/cart/api'

interface InitialStateTypes {
	isLoading: boolean
	cart: CartResponseType | null
	isError: boolean
	error: string | null
}

const initialState: InitialStateTypes = {
	isLoading: false,
	cart: null,
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
				state.cart = null
			})
			.addCase(fetchCartByUserID.fulfilled, (state, action: PayloadAction<CartsListResponseType>) => {
				const cartsList = action.payload
				state.isError = false
				state.error = null
				state.isLoading = false
				state.cart = cartsList?.carts[0] ?? null
			})
			.addCase(fetchCartByUserID.rejected, (state, action) => {
				state.isError = true
				state.isLoading = false
				state.error = action.payload ?? 'Ошибка загрузки данных'
				state.cart = null
			})
	}
})
