import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialStateTypes {
	queryString: string
}

const initialState: InitialStateTypes = {
	queryString: ''
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setQueryString: (state, action: PayloadAction<string>) => {
			state.queryString = action.payload
		}
	}
})
