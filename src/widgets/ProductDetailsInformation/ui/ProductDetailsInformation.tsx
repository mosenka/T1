import React, { useMemo } from 'react'

import { useAppSelector } from '@shared/libs/hooks'

import { PriceCard, ProductDetailsCard, ProductResponseType } from '@entities/product'
import { AddToCartButton, getCartStates, getProductCountInCart } from '@entities/cart'
import { Raiting } from '@features/Raiting'

interface ProductDetailsInformationPropsType {
	product: ProductResponseType
	id: string
}

export const ProductDetailsInformation: React.FC<ProductDetailsInformationPropsType> = ({ product, id }) => {
	const { cart } = useAppSelector(getCartStates)

	const productQuantity = useMemo(() => {
		return getProductCountInCart(Number(id), cart)
	}, [cart, id])

	return (
		<ProductDetailsCard>
			<ProductDetailsCard.HEAD>
				<ProductDetailsCard.TITLE title={product.title} />
				<ProductDetailsCard.ROW>
					<Raiting count={product.rating} />
					<ProductDetailsCard.CATEGORY text={product.tags.join(', ')} />
				</ProductDetailsCard.ROW>
			</ProductDetailsCard.HEAD>
			<ProductDetailsCard.STOCK text={` In Stock - Only ${product.stock} left!`} />
			<ProductDetailsCard.DESCRIPTION>{product.description}</ProductDetailsCard.DESCRIPTION>
			<ProductDetailsCard.OTHER>
				<p>{product.warrantyInformation}</p>
				<p>{product.shippingInformation}</p>
			</ProductDetailsCard.OTHER>
			<PriceCard
				price={product.price}
				discountPercent={product.discountPercentage}
				addToCartButton={<AddToCartButton size={AddToCartButton.SIZE.XL} count={productQuantity} />}
			/>
		</ProductDetailsCard>
	)
}
