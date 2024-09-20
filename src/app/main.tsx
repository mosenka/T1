import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@app/router/appRouter'
import { ReduxProvider } from '@app/providers/ReduxProvider'

import { CartProvider } from '@entities/cart'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReduxProvider>
			<CartProvider>
				<RouterProvider router={appRouter()} />
			</CartProvider>
		</ReduxProvider>
	</StrictMode>
)
