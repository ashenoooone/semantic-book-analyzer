import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '~/shared/lib/classNames';
import cls from './Button.module.scss';

type ButtonTheme = 'default' | 'inverted';

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
	const {
		className = '',
		children,
		type = 'button',
		theme = 'default',
		...other
	} = props;
	return (
		<button
			type={type}
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...other}
		>
			{children}
		</button>
	);
};
