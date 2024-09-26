import classNames from 'classnames'
import React from 'react'

import { Spinner } from '@shared/ui'

import { AddToCartButtonSizes } from '../../libs/AddToCartButtonSizes'
import { EmptyCartButton } from '../EmptyCartButton/EmptyCartButton'
import { ActionCartButton } from '../ActionCartButton/ActionCartButton'

import styles from './AddToCartButton.module.scss'

interface AddToCartButtonPropsType {
	count?: number | null
	size?: AddToCartButtonSizes
	addItemHandler: () => void
	removeItemHandler: () => void
	isLoading?: boolean
	isDisabledForAdd?: boolean
}

interface AddToCartButtonExtendsType {
	SIZE: typeof AddToCartButtonSizes
}

export const AddToCartButton: AddToCartButtonExtendsType & React.FC<AddToCartButtonPropsType> = ({
	size = AddToCartButtonSizes.M,
	count,
	addItemHandler,
	removeItemHandler,
	isLoading = false,
	isDisabledForAdd
}) => {
	// const [count, setCount] = useState<number>(initCount ?? 0)

	return (
		<div className={classNames(styles.wrapper, styles[size])}>
			{count > 0 ? (
				<>
					<ActionCartButton
						icon={'iconMinus'}
						aria-label={'remove one item from cart'}
						onClick={removeItemHandler}
						className={styles.button}
						size={size}
						disabled={isLoading || count === 0}
					/>
					<div className={classNames(styles.textWrapper, styles[size])}>
						{isLoading && (
							<span className={styles.text}>
								<Spinner size={Spinner.SIZE.XS} />
							</span>
						)}
						{!isLoading && <span className={classNames('text-s', styles.text)}>{count} item</span>}
					</div>
					<ActionCartButton
						icon={'iconPlus'}
						aria-label={'add one item to cart'}
						onClick={addItemHandler}
						className={styles.button}
						size={size}
						disabled={isLoading || isDisabledForAdd}
					/>
				</>
			) : (
				<EmptyCartButton
					size={size}
					onClick={addItemHandler}
					className={styles.button}
					disabled={isLoading || isDisabledForAdd}
					isLoading={isLoading}
					aria-label={'add to cart'}
				/>
			)}
		</div>
	)
}

AddToCartButton.SIZE = AddToCartButtonSizes
