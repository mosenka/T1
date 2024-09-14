import React from 'react'

type Required<T> = {
	[P in keyof T]-?: T[P]
}

type MyComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>>

export const withStaticProps = <T, P, S>(
	forwarded: (MyComponent<T, P> & Partial<S>) | (React.FC<T> & Partial<S>),
	staticProps: Required<S>
) => Object.assign(forwarded, staticProps)
