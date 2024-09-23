import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type PageTitlePropsTypes = {
	title: string
}

export const PageTitle: React.FC<PageTitlePropsTypes> = ({ title }) => {
	const location = useLocation()

	useEffect(() => {
		document.title = title
	}, [location, title])

	return null
}
