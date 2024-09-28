import { StoryObj } from '@storybook/react'
import type { Meta } from '@storybook/react'
import { styled } from '@storybook/theming'
// import { fn } from '@storybook/test'

import { EmptyCartButton } from '@entities/cart/ui/AddToCartButton'

import { ProductCard as ProductCardComponent } from './ProductCard'
import { ProductListItemType } from '../../types/ProductListItemType'

import img from './img.png'

const product: ProductListItemType = {
	id: 236,
	title: 'Essence Mascara Lash Princess',
	price: 9.99,
	discountPercentage: 10,
	thumbnail: img
}

const Wrapper = styled.div`
	width: 600px;
`

export default {
	title: 'Molecules/ProductCard',
	component: ProductCardComponent,
	tags: ['autodocs'],
	argTypes: {
		product: {
			control: 'object',
			description: 'product from products list type'
		},
		cartButton: {
			control: 'object',
			description: 'button for add product in cart'
		}
	},
	args: {
		product: product,
		cartButton: <EmptyCartButton />
	}
} satisfies Meta<typeof ProductCardComponent>

type Story = StoryObj<typeof ProductCardComponent>

export const ProductCard: Story = {
	render: args => (
		<Wrapper>
			<ProductCardComponent {...args} />
		</Wrapper>
	)
}
