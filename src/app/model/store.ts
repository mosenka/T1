import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

import { commonApi } from '@shared/api'

export const makeStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		devTools: import.meta.env.MODE !== 'production',
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(commonApi.middleware)
	})

	return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
