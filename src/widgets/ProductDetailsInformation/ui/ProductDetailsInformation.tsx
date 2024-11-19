import React from 'react'

import { PriceCard, ProductDetailsCard, ProductResponseType } from '@entities/product'
import { AddToCartButtonSizes } from '@entities/cart'

import { Raiting } from '@features/Raiting'
import { CartActionButton } from '@features/CartActionButton'

interface ProductDetailsInformationPropsType {
	product: ProductResponseType
}

export const ProductDetailsInformation: React.FC<ProductDetailsInformationPropsType> = ({ product }) => {
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
				addToCartButton={
					<CartActionButton
						productId={product?.id}
						totalCount={product.stock}
						size={AddToCartButtonSizes.XL}
					/>
				}
			/>
		</ProductDetailsCard>
	)
}
