import { useNavigate } from 'react-router-dom'
import React, { FormEvent, useCallback, useState } from 'react'

import { isFetchError } from '@shared/api'
import { Button, Container, ErrorMessage, Heading, Input, Spinner } from '@shared/ui'

import { useSignInMutation } from '@entities/auth/api'

import styles from './LoginForm.module.scss'

interface ErrorMessageType {
	message?: string
}

export const LoginForm: React.FC = () => {
	const [signIn, { isLoading }] = useSignInMutation()

	const navigate = useNavigate()

	const [error, setError] = useState<ErrorMessageType | null>(null)
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handlerSubmit = useCallback(
		async (event: FormEvent) => {
			event.preventDefault()
			setError(null)

			if (username?.length === 0 || password?.length === 0) {
				setError({ message: 'Все поля должны быть заполнены' })
				return
			}

			try {
				await signIn({ username, password }).unwrap()
				navigate('/')
			} catch (error) {
				console.error(error)
				if (isFetchError(error) && error?.status === 404) {
					setError({ message: 'Не верный логин или пароль' })
				} else {
					setError({ message: 'Ошибка авторизации' })
				}
			}
		},
		[username, password, signIn, navigate]
	)

	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Heading>Sign in</Heading>
				<div className={styles.card}>
					{error?.message && <ErrorMessage text={error?.message} className={styles.error} />}
					<form className={styles.form} onSubmit={handlerSubmit}>
						<Input
							placeholder={'Login'}
							className={styles.input}
							sizing={Input.SIZING.XL}
							value={username}
							name={'username'}
							onChange={event => setUsername(event.target.value)}
							aria-invalid={Boolean(error && error?.message)}
							disabled={isLoading}
							autoComplete="on"
							aria-label={'login form'}
						/>
						<Input
							placeholder={'Password'}
							className={styles.input}
							sizing={Input.SIZING.XL}
							type={'password'}
							value={password}
							name={'password'}
							onChange={event => setPassword(event.target.value)}
							aria-invalid={Boolean(error && error?.message)}
							disabled={isLoading}
							autoComplete="on"
							aria-label={'password form'}
						/>
						<Button size={Button.SIZE.XL} type={'submit'} disabled={isLoading} className={styles.button}>
							{isLoading && <Spinner size={Spinner.SIZE.XS} />}
							<span>Sign in</span>
						</Button>
					</form>
				</div>
			</Container>
		</section>
	)
}
