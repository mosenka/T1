import classNames from 'classnames'
import React, { useState } from 'react'

import { AddToCartButtonSizes } from '../../libs/AddToCartButtonSizes'
import { EmptyCartButton } from '../EmptyCartButton/EmptyCartButton'
import { ActionCartButton } from '../ActionCartButton/ActionCartButton'

import styles from './AddToCartButton.module.scss'

interface AddToCartButtonPropsType {
	count?: number | null
	size?: AddToCartButtonSizes
}

interface AddToCartButtonExtendsType {
	SIZE: typeof AddToCartButtonSizes
}

export const AddToCartButton: AddToCartButtonExtendsType & React.FC<AddToCartButtonPropsType> = ({
	size = AddToCartButtonSizes.M,
	count: initCount
}) => {
	const [count, setCount] = useState<number>(initCount ?? 0)

	return (
		<div className={classNames(styles.wrapper, styles[size])}>
			{count > 0 ? (
				<>
					<ActionCartButton
						icon={'iconMinus'}
						aria-label={'remove one item from cart'}
						onClick={() => setCount(prevState => prevState - 1)}
						className={styles.button}
						size={size}
					/>
					<div className={classNames(styles.textWrapper, styles[size])}>
						<span className={classNames('text-s', styles.text)}>{count} item</span>
					</div>
					<ActionCartButton
						icon={'iconPlus'}
						aria-label={'add one item to cart'}
						onClick={() => setCount(prevState => prevState + 1)}
						className={styles.button}
						size={size}
					/>
				</>
			) : (
				<EmptyCartButton
					size={size}
					onClick={() => setCount(prevState => prevState + 1)}
					className={styles.button}
				/>
			)}
		</div>
	)
}

AddToCartButton.SIZE = AddToCartButtonSizes
