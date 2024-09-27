import React from 'react'
import { ErrorMessage, Spinner } from '@shared/ui'

import { useCartActions } from '../../libs/hooks/useCartActions.ts'

import styles from './RemoveFromCartButton.module.scss'

interface RemoveFromCartButtonPropsType {
	id: number
}

export const RemoveFromCartButton: React.FC<RemoveFromCartButtonPropsType> = ({ id }) => {
	const { handlerRemoveAll, isLoading, isError } = useCartActions({ productId: id })

	if (isLoading) {
		return <Spinner size={Spinner.SIZE.XS} />
	}

	if (isError) {
		return <ErrorMessage text={'ошибка'} />
	}

	return (
		<button
			className={styles.delete}
			aria-label={'remove from cart button'}
			onClick={handlerRemoveAll}
			disabled={isLoading}
		>
			Delete
		</button>
	)
}
