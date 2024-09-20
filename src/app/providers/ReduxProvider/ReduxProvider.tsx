import React from 'react'

import { Provider } from 'react-redux'

import { makeStore } from '../../model/store'

const store = makeStore()

interface ReduxReduxProviderProps {
	children: React.ReactNode
}

export const ReduxProvider: React.FC<ReduxReduxProviderProps> = ({ children }) => {
	if (!store) return

	return <Provider store={store}>{children}</Provider>
}
