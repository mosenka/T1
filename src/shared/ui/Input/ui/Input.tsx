import classNames from 'classnames'
import React, { forwardRef, InputHTMLAttributes, useId } from 'react'

import { withStaticProps } from '@shared/types'

import { InputSizes } from '../libs/InputSizes'
import { LabelPosition } from '../libs/LabelPosition'
import { InputThemes } from '../libs/InputThemes.ts'

import styles from './Input.module.scss'

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
	labelText?: string
	sizing?: InputSizes
	theme?: InputThemes
	labelPosition?: LabelPosition
	wrapperClassName?: string
	errorText?: string | false
}

const InputTextFunc: React.ForwardRefRenderFunction<HTMLInputElement, InputPropsType> = (
	{
		labelText,
		sizing = InputSizes.M,
		theme = InputThemes.Gray,
		wrapperClassName = '',
		labelPosition = LabelPosition.Top,
		errorText,
		...props
	}: InputPropsType,
	ref
) => {
	const customId = useId()

	const wrapperClasses = classNames(
		styles.wrapper,
		{ [styles[sizing]]: sizing },
		{ [styles[labelPosition]]: labelPosition },
		{ [styles[theme]]: theme },
		wrapperClassName
	)

	const inputClasses = classNames(
		styles.input,
		{ [styles[sizing]]: sizing },
		{ [styles[theme]]: theme },
		props.className
	)

	return (
		<div className={wrapperClasses}>
			{labelText && (
				<label
					className={classNames(styles.label, { [styles.isDisabled]: props?.disabled })}
					htmlFor={props?.id ?? customId}
				>
					{labelText}
					{props?.['aria-required'] && <span className={styles.dot}>*</span>}
				</label>
			)}
			<div className={styles.inputWrapper}>
				<input
					ref={ref}
					id={props?.id ?? customId}
					{...props}
					className={inputClasses}
					aria-describedby={!errorText ? undefined : errorText}
				/>
			</div>
			{errorText && <span className={styles.error}>{errorText}</span>}
		</div>
	)
}

const Input = withStaticProps(forwardRef(InputTextFunc), {
	SIZING: InputSizes,
	THEME: InputThemes,
	LABEL_POSITION: LabelPosition
})

export { Input }
