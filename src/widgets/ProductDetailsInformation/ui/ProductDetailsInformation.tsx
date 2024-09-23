import React from 'react'

import { PriceCard, ProductDetailsCard } from '@entities/product'
import { AddToCartButton } from '@entities/cart'
import { Raiting } from '@features/Raiting'

const PRODUCT = {
	name: 'Essence Mascara Lash Princess',
	category: 'electronics, selfie accessories',
	stockInfo: 'In Stock - Only 5 left!',
	desc: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
	otherInfo: ['1 month warranty', 'Ships in 1 month']
}

export const ProductDetailsInformation: React.FC = () => {
	return (
		<ProductDetailsCard>
			<ProductDetailsCard.HEAD>
				<ProductDetailsCard.TITLE title={PRODUCT.name} />
				<ProductDetailsCard.ROW>
					<Raiting count={4} />
					<ProductDetailsCard.CATEGORY text={PRODUCT.category} />
				</ProductDetailsCard.ROW>
			</ProductDetailsCard.HEAD>
			<ProductDetailsCard.STOCK text={PRODUCT.stockInfo} />
			<ProductDetailsCard.DESCRIPTION>{PRODUCT.desc}</ProductDetailsCard.DESCRIPTION>
			<ProductDetailsCard.OTHER>
				{PRODUCT.otherInfo.map(info => (
					<p>{info}</p>
				))}
			</ProductDetailsCard.OTHER>
			<PriceCard
				price={9.99}
				discount={'14.5%'}
				discountedPrice={7.17}
				addToCartButton={<AddToCartButton size={AddToCartButton.SIZE.XL} />}
			/>
		</ProductDetailsCard>
	)
}
