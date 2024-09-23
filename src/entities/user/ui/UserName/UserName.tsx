import React, { MouseEvent } from 'react'

import styles from './UserName.module.scss'

interface UserNamePropsType {
	name: string
}

export const UserName: React.FC<UserNamePropsType> = ({ name }) => {
	const handlerClick = (event: MouseEvent) => {
		event.preventDefault()
	}

	return (
		<button onClick={handlerClick} className={styles.link}>
			{name}
		</button>
	)
}
