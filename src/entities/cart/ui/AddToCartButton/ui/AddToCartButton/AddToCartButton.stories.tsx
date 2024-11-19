import type { Meta, StoryObj } from '@storybook/react'
import { styled } from '@storybook/theming'
import { fn } from '@storybook/test'

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
	},
	args: {
		count: 0,
		addItemHandler: fn(),
		removeItemHandler: fn()
	}
} satisfies Meta<typeof AddToCartButton>

type Story = StoryObj<typeof AddToCartButton>

export const EmptyButton: Story = {
	render: args => (
		<Column>
			<AddToCartButton size={AddToCartButtonSizes.M} {...args} />
			<AddToCartButton size={AddToCartButtonSizes.XL} {...args} />
		</Column>
	)
}

export const LabeledButton: Story = {
	render: args => (
		<Column>
			<AddToCartButton {...args} count={5} size={AddToCartButtonSizes.M} />
			<AddToCartButton {...args} count={5} size={AddToCartButtonSizes.XL} />
		</Column>
	)
}
