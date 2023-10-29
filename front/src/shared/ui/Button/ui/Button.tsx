import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '~/shared/lib/classNames';
import cls from './Button.module.scss';

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
	const {
		className = '',
		children,
		type = 'button',
		...other
	} = props;
	return (
		<button
			type={type}
			className={classNames(cls.Button, {}, [className])}
			{...other}
		>
			{children}
		</button>
	);
};
