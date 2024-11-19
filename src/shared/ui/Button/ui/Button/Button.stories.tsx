import { StoryObj } from '@storybook/react'
import type { Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { styled } from '@storybook/theming'

import { Button } from './Button'

export default {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(Button.SIZE),
			description: 'Button size'
		},
		theme: {
			control: 'select',
			options: Object.values(Button.THEME),
			description: 'Button theme'
		}
	},
	args: {
		theme: Button.THEME.Orange,
		size: Button.SIZE.SM,
		children: 'Button text',
		onClick: fn()
	}
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

const List = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	gap: 40px;
	padding: 0;
	margin: 0;
`

const ButtonsSizesList = () => {
	return (
		<List>
			<Button size={Button.SIZE.SM}>size SM</Button>
			<Button size={Button.SIZE.MD}>size MD</Button>
			<Button size={Button.SIZE.XL}>size XL</Button>
		</List>
	)
}

export const Themes: Story = {
	render: args => <Button {...args} />
}

export const Sizes: Story = {
	render: () => <ButtonsSizesList />
}
