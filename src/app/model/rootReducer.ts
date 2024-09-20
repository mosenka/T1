import { combineReducers } from '@reduxjs/toolkit'
import { commonApi } from '@shared/api'

import CartReducer from '@entities/cart/model'

export default combineReducers({
	CartReducer,
	[commonApi.reducerPath]: commonApi.reducer
})
