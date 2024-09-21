import { combineReducers } from '@reduxjs/toolkit'
import { commonApi } from '@shared/api'

import CartReducer from '@entities/cart/model'
import ProductReducer from '@entities/product/model'

export default combineReducers({
	CartReducer,
	ProductReducer,
	[commonApi.reducerPath]: commonApi.reducer
})
