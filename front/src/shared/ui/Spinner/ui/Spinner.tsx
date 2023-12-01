import React, { CSSProperties, FC, ReactNode, useMemo } from 'react';
import cls from './Spinner.module.scss';
import { classNames } from '~/shared/lib/classNames';

interface SpinnerProps {
	className?: string;
	width?: number;
	height?: number;
}

export const Spinner = (props: SpinnerProps) => {
	const { className = '', height = 48, width = 48 } = props;

	const styles = useMemo<CSSProperties>(() => {
		return {
			width,
			height
		};
	}, []);
	return (
		<div
			style={styles}
			className={classNames(cls['dot-spinner'], {}, [className])}
		>
			{[...Array(8)].map((_, index) => (
				<div
					key={index}
					className={cls['dot-spinner__dot']}
				></div>
			))}
		</div>
	);
};
