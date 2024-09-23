import React from 'react'

import styles from './RemoveFromCartButton.module.scss'

interface RemoveFromCartButtonPropsType {
	id: string
}

export const RemoveFromCartButton: React.FC<RemoveFromCartButtonPropsType> = ({ id }) => {
	return (
		<button className={styles.delete} aria-label={'remove from cart button'} onClick={() => console.log(id)}>
			Delete
		</button>
	)
}
