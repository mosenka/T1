import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PageTitle } from '@shared/ui'
import { AuthLayout, BaseLayout } from '@app/layouts'

import { checkAccessToken } from '@entities/auth'

import { MainPage } from '@pages/main'
import { CartPage } from '@pages/cart'
import { ProductPage } from '@pages/product'
import { ErrorPage } from '@pages/error'
import { LoginPage } from '@pages/login'

export function appRouter() {
	return createBrowserRouter([
		{
			loader: async ({ request }) => {
				const loginURL = import.meta.env.VITE_LOGIN_URL

				if (!request.url.includes(loginURL)) {
					if (!checkAccessToken()) {
						throw new Response('', { status: 302, headers: { Location: loginURL } })
					}
				} else {
					if (checkAccessToken()) {
						throw new Response('', { status: 302, headers: { Location: '/' } })
					}
				}

				return null
			},
			children: [
				{
					path: import.meta.env.VITE_LOGIN_URL,
					element: (
						<AuthLayout>
							<PageTitle title={'Sign in | Goods4you'} />
							<LoginPage />
						</AuthLayout>
					)
				},
				{
					path: '/',
					element: (
						<BaseLayout>
							<PageTitle title={'Catalog | Goods4you'} />
							<MainPage />
						</BaseLayout>
					)
				},
				{
					path: '/cart',
					element: (
						<BaseLayout>
							<PageTitle title={'My cart | Goods4you'} />
							<CartPage />
						</BaseLayout>
					)
				},
				{
					path: '/product/:id',
					element: (
						<BaseLayout>
							<ProductPage />
						</BaseLayout>
					)
				},
				{
					path: '/error',
					element: (
						<BaseLayout>
							<PageTitle title={'error'} />
							<ErrorPage />
						</BaseLayout>
					)
				},
				{
					path: '*',
					element: <Navigate to="/error" />
				}
			]
		}
	])
}
