import { commonApi } from '@shared/api'

import { ProductResponseType, ProductSearchParamsType, ProductsListResponseType } from '@entities/product'

export const productApi = commonApi.injectEndpoints({
	endpoints: build => ({
		searchProducts: build.query<ProductsListResponseType, ProductSearchParamsType>({
			query: params => ({
				url: `auth/products/search`,
				params
			}),
			providesTags: ['ProductsList']
		}),
		getProductById: build.query<ProductResponseType, number | string>({
			query: id => ({
				url: `auth/products/${id}`
			}),
			providesTags: ['Product']
		})
	})
})

export const { useSearchProductsQuery, useLazySearchProductsQuery, useGetProductByIdQuery } = productApi
