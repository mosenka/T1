import React, { useState } from 'react'

import styles from './AddToCartButton.module.scss'
import { Button, Icon } from '@shared/ui'
import classNames from 'classnames'

interface AddToCartButtonPropsType {
	count?: number
}

export const AddToCartButton: React.FC<AddToCartButtonPropsType> = ({ count: initCount }) => {
	const [count, setCount] = useState<number>(initCount ?? 0)

	return (
		<div className={styles.wrapper}>
			{count > 0 ? (
				<>
					<Button
						size={Button.SIZE.SM}
						className={styles.button}
						onClick={() => setCount(prevState => prevState - 1)}
						aria-label={'remove one item from cart'}
						type={'button'}
					>
						<Icon icon={'iconMinus'} width={18} paintingType={Icon.paintingType.Fill} />
					</Button>
					<div className={styles.textWrapper}>
						<span className={classNames('text-s', styles.text)}>{count} item</span>
					</div>
					<Button
						size={Button.SIZE.SM}
						className={styles.button}
						onClick={() => setCount(prevState => prevState + 1)}
						aria-label={'add one item to cart'}
						type={'button'}
					>
						<Icon icon={'iconPlus'} width={18} />
					</Button>
				</>
			) : (
				<Button
					onClick={() => setCount(prevState => prevState + 1)}
					className={styles.button}
					aria-label={'add to cart'}
					type={'button'}
				>
					<Icon icon={'iconCart'} width={18} />
				</Button>
			)}
		</div>
	)
}
