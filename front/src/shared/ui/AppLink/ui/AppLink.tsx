import React, { ReactNode } from 'react';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '~/shared/lib/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
	className?: string;
	children?: ReactNode;
	to: string;
}

export const AppLink = (props: AppLinkProps) => {
	const { className = '', children, to, ...args } = props;
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				[isActive ? cls.active : ''].join(' ')
			}
			{...args}
		>
			{children}
		</NavLink>
	);
};
