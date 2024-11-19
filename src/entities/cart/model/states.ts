import { RootState } from '@app/model/store'

export const getCartStates = (state: RootState) => state.CartReducer
export const selectUpdateCartStates = (state: RootState) => {
	return {
		cart: state.CartReducer.cart,
		isUpdating: state.CartReducer.isUpdating,
		updateError: state.CartReducer.updateError
	}
}
