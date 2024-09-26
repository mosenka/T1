import type { Meta, StoryObj } from '@storybook/react'
import { styled } from '@storybook/theming'

import { AddToCartButton } from './AddToCartButton'
import { AddToCartButtonSizes } from '../../libs/AddToCartButtonSizes'

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 40px;
`

export default {
	title: 'Molecules/AddToCartButton',
	component: AddToCartButton,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(AddToCartButtonSizes),
			description: 'Add To Cart Button size'
		},
		count: {
			control: 'number',
			description: 'count items'
		}
	}
} satisfies Meta<typeof AddToCartButton>

type Story = StoryObj<typeof AddToCartButton>

export const EmptyButton: Story = {
	render: () => (
		<Column>
			<AddToCartButton count={0} size={AddToCartButtonSizes.M} />
			<AddToCartButton count={0} size={AddToCartButtonSizes.XL} />
		</Column>
	)
}

export const LabeledButton: Story = {
	render: () => (
		<Column>
			<AddToCartButton count={5} size={AddToCartButtonSizes.M} />
			<AddToCartButton count={5} size={AddToCartButtonSizes.XL} />
		</Column>
	)
}
