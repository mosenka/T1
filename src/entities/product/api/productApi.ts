import { commonApi } from '@shared/api'

import { ProductSearchParamsType, ProductsListResponseType } from '@entities/product'

export const productApi = commonApi.injectEndpoints({
	endpoints: build => ({
		searchProducts: build.query<ProductsListResponseType, ProductSearchParamsType>({
			query: params => ({
				url: `/products/search`,
				params
			}),
			providesTags: ['ProductsList']
		})
	})
})

export const { useSearchProductsQuery, useLazySearchProductsQuery } = productApi
