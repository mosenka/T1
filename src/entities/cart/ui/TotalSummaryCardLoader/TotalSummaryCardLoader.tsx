import React from 'react'
import { Skeleton } from '@shared/ui'

export const TotalSummaryCardLoader: React.FC = () => {
	return (
		<Skeleton>
			<Skeleton.TEXT />
			<Skeleton.TEXT />
			<Skeleton.TITLE />
		</Skeleton>
	)
}
