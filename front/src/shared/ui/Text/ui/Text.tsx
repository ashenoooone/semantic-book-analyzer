import React, { memo } from 'react';
import cls from './Text.module.scss';
import { Mods } from '~/shared/lib/classNames/classNames';
import { classNames } from '~/shared/lib/classNames';

export enum TextSize {
	SM = 'size_sm',
	M = 'size_m',
	L = 'size_l'
}

interface TextProps {
	className?: string;
	text?: string;
	title?: string;
	error?: boolean;
	size?: TextSize;
}

export const Text = memo((props: TextProps) => {
	const {
		className = '',
		text,
		title,
		error,
		size = TextSize.M
	} = props;

	const mods: Mods = {
		[cls.error]: error,
		[cls[size]]: size
	};

	return (
		<div className={classNames(cls.Text, mods, [className])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
