import { createAsyncThunk } from '@reduxjs/toolkit'

import { isFetchError } from '@shared/api'

import { CartsListResponseType } from '@entities/cart'
import { getAccessToken } from '@entities/auth'

export const fetchCartByUserID = createAsyncThunk<CartsListResponseType, number, { rejectValue: string }>(
	'cart/fetchByUserID',
	async (userID: number, thunkApi) => {
		const accessToken = getAccessToken()

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/carts/user/${userID}`, {
				headers: {
					Authorization: `${accessToken}`,
					'Content-Type': 'application/json'
				}
			})

			const data = await response.json()

			return data
		} catch (error) {
			console.error(error)

			if (isFetchError(error) && error.status === 401) {
				window.location.href = '/login'
			}

			if (error instanceof Error) {
				return thunkApi.rejectWithValue(error.message)
			}
			return thunkApi.rejectWithValue('Неизвестная ошибка')
		}
	}
)
