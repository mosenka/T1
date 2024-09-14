import React from 'react'

import { Banner } from '@widgets/Banner'
import { FaqSection } from '@widgets/FaqSection'
import { CatalogSection } from '@widgets/CatalogSection'

export const MainPage: React.FC = () => {
	return (
		<>
			<Banner />
			<CatalogSection />
			<FaqSection />
		</>
	)
}
