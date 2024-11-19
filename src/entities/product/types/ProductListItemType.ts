import { ProductResponseType } from '@entities/product'

type ProductItemKeys = 'id' | 'thumbnail' | 'price' | 'discountPercentage' | 'title'

export type ProductListItemType = Pick<ProductResponseType, ProductItemKeys>
