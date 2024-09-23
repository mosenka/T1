import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from '@app/layouts'

import { PageTitle } from '@shared/ui'

import { MainPage } from '@pages/main'
import { CartPage } from '@pages/cart'
import { ProductPage } from '@pages/product'
import { ErrorPage } from '@pages/error'

export function appRouter() {
	return createBrowserRouter([
		{
			element: <BaseLayout />,
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
				},
				{
					path: '/product/:id',
					element: (
						<>
							<PageTitle title={'Essence Mascara Lash Princess | Goods4you'} />
							<ProductPage />
						</>
					)
				},
				{
					path: '*',
					element: (
						<>
							<PageTitle title={'error'} />
							<ErrorPage />
						</>
					)
				}
			]
		}
	])
}
