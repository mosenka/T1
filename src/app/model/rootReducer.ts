import { combineReducers } from '@reduxjs/toolkit'
import { commonApi } from '@shared/api'

import CartReducer from '@entities/cart/model'
import ProductReducer from '@entities/product/model'
import AuthReducer from '@entities/auth/model'

export default combineReducers({
	CartReducer,
	ProductReducer,
	AuthReducer,
	[commonApi.reducerPath]: commonApi.reducer
})
