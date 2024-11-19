import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { appRouter } from '@app/router/appRouter'
import { ReduxProvider } from '@app/providers/ReduxProvider'
import { CartProvider } from '@app/providers/CartProvider'
import { UserProvider } from '@app/providers/UserProvider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReduxProvider>
			<UserProvider>
				<CartProvider>
					<RouterProvider router={appRouter()} />
				</CartProvider>
			</UserProvider>
		</ReduxProvider>
	</StrictMode>
)
