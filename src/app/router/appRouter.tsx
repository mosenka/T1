import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from '@app/layouts'

import { PageTitle } from '@shared/ui'

import { MainPage } from '@pages/main'
import { CartPage } from '@pages/cart'

export function appRouter() {
	return createBrowserRouter([
		{
			element: <BaseLayout />,
			errorElement: <div>error page</div>,
			children: [
				{
					path: '/',
					element: (
						<>
							<PageTitle title={'Catalog | Goods4you'} />
							<MainPage />
						</>
					)
				},
				{
					path: '/cart',
					element: (
						<>
							<PageTitle title={'My cart | Goods4you'} />
							<CartPage />
						</>
					)
				}
			]
		}
	])
}
