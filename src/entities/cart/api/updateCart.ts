import { createAsyncThunk } from '@reduxjs/toolkit'

import { isFetchError } from '@shared/api'

import { actionBeforeRedirect, getAccessToken } from '@entities/auth'
import { CartResponseType } from '@entities/cart'

import { UpdateCartValuesType } from '../types/UpdateCartValuesType'

export const updateCart = createAsyncThunk<CartResponseType, UpdateCartValuesType, { rejectValue: string }>(
	'cart/updateCart',
	async (data: UpdateCartValuesType, thunkApi) => {
		const accessToken = getAccessToken()

		const { cartId, products } = data

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/carts/${cartId}`, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					merge: false,
					products: products
				})
			})

			const data = await response.json()

			return data
		} catch (error) {
			console.error(error)

			if (isFetchError(error) && error.status === 401) {
				actionBeforeRedirect()
			}

			if (error instanceof Error) {
				return thunkApi.rejectWithValue(error.message)
			}
			return thunkApi.rejectWithValue('Неизвестная ошибка')
		}
	}
)
