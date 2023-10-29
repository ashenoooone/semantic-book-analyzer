import React, { FC, ReactNode } from 'react';
import { classNames } from '~/shared/lib/classNames';
import cls from './Tab.module.scss';

interface TabProps {
	className?: string;
	children?: ReactNode;
}

export const Tab = (props: TabProps) => {
	const { className = '', children } = props;
	return (
		<div className={classNames(cls.Tab, {}, [className])}>
			{children}
		</div>
	);
};
