import React, { FC, ReactNode } from 'react';
import cls from './Navbar.module.scss';
import Logo from '~/shared/assets/Logo.svg';
import { AppLink } from '~/shared/ui/AppLink';
import { RoutesPaths } from '~/shared/config/router/routerConfig';

export const Navbar = () => {
	return (
		<nav className={cls.Navbar}>
			<Logo className={cls.icon} />
			<div className={cls.links}>
				<AppLink to={RoutesPaths.history}>История</AppLink>
				<AppLink to={RoutesPaths.main}>Анализ</AppLink>
			</div>
		</nav>
	);
};
