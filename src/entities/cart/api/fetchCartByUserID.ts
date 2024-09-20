import { createAsyncThunk } from '@reduxjs/toolkit'
import { CartsListResponseType } from '@entities/cart'

export const fetchCartByUserID = createAsyncThunk<CartsListResponseType, number, { rejectValue: string }>(
	'cart/fetchByUserID',
	async (userID: number, thunkApi) => {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/carts/user/${userID}`)

			const data = await response.json()

			return data
		} catch (error) {
			console.error(error)
			if (error instanceof Error) {
				return thunkApi.rejectWithValue(error.message)
			}
			return thunkApi.rejectWithValue('Неизвестная ошибка')
		}
	}
)
