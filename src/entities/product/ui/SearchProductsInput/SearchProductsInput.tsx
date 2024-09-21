import React, { useEffect, useRef, useState } from 'react'

import { useAppDispatch } from '@shared/libs/hooks'
import { Input } from '@shared/ui'

import { setQueryString } from '@entities/product/model/actions'

interface SearchProductsInputProps {
	debounce?: number
}

export const SearchProductsInput: React.FC<SearchProductsInputProps> = ({ debounce = 500 }) => {
	const [value, setValue] = useState('')

	const timerId = useRef<number | null>()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!dispatch) return
		const timeout = window.setTimeout(() => {
			dispatch(setQueryString(value))
		}, debounce)

		timerId.current = timeout

		return () => {
			if (timerId.current) clearTimeout(timerId.current)
		}
	}, [dispatch, debounce, value])

	return (
		<Input
			sizing={Input.SIZING.XL}
			value={value}
			onChange={event => setValue(event.target.value)}
			placeholder={'Search by title'}
			type={'text'}
			aria-label="Search by title"
		/>
	)
}
