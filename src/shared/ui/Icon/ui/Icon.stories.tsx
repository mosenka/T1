import { StoryObj } from '@storybook/react'
import type { Meta } from '@storybook/react'
import { styled } from '@storybook/theming'

import { Icon as IconComponent } from './Icon.tsx'
import * as iconsList from '../libs/iconsList'
import { IconPaintingType } from '../types/IconPaintingType.ts'
import { IconsNameType } from '../types/IconsNameType.ts'

export default {
	title: 'Atoms/Icon',
	component: IconComponent,
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: 'select',
			options: Object.keys(iconsList),
			description: 'icons names list'
		},
		width: {
			control: 'number'
		},
		paintingType: {
			control: 'select',
			options: Object.values(IconPaintingType),
			description: 'icons painting type (fill or stroke)'
		}
	},
	args: {
		width: 50,
		icon: 'iconStar'
	}
} satisfies Meta<typeof IconComponent>

type Story = StoryObj<typeof IconComponent>

const List = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	gap: 40px;
	list-style: none;
	padding: 0;
	margin: 0;
`

const IconsListRender = () => {
	const list = Object.keys(iconsList).map(iconName => {
		return <IconComponent icon={iconName as IconsNameType} key={iconName} width={30} />
	})

	return <List>{list}</List>
}

export const Icon: Story = {
	render: args => <IconComponent {...args} />
}

export const IconsList: Story = {
	render: () => <IconsListRender />
}

export const IconPainting: Story = {
	render: args => (
		<List>
			<IconComponent paintingType={IconPaintingType.Stroke} {...args} />
			<IconComponent paintingType={IconPaintingType.Fill} {...args} />
		</List>
	)
}
