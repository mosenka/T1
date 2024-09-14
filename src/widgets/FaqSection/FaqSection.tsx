import React from 'react'

import { Accordion, Container, Heading } from '@shared/ui'
import { getRandomUUID } from '@shared/libs/utils'

import styles from './FaqSection.module.scss'

const LIST: Array<{ title: string; text: string }> = [
	{
		title: 'How can I track the status of my order?',
		text: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
	},
	{
		title: 'What payment methods do you accept?',
		text: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
	},
	{
		title: 'How can I return or exchange an item?',
		text: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'
	}
]

export const FaqSection: React.FC = () => {
	const questionsList = LIST.map(question => {
		const key = getRandomUUID()

		return (
			<Accordion heading={question.title} key={key}>
				<p>
					After placing your order, you will receive a confirmation email containing your order number and a
					tracking link. You can also log in to your account on our website and go to the "My Orders" section
					to track your delivery status.
				</p>
			</Accordion>
		)
	})

	return (
		<section id="faq" className={styles.section}>
			<Container>
				<div className={styles.inner}>
					<Heading Level={Heading.LEVEL.h2} className={styles.title}>
						FAQ
					</Heading>
					{questionsList}
				</div>
			</Container>
		</section>
	)
}
