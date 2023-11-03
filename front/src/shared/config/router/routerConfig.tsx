import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainPage } from '~/pages/MainPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { HistoryPage } from '~/pages/HistoryPage';
import { RegisterPage } from '~/pages/RegisterPage';
import { LoginPage } from '~/pages/LoginPage';

export type RoutesProps = RouteProps & {
	authOnly?: boolean;
};

export enum Routes {
	MAIN = 'main',
	HISTORY = 'history',
	LOGIN = 'login',
	REGISTER = 'register',
	NOT_FOUND = 'not_found'
}

export const RoutesPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.HISTORY]: '/history',
	[Routes.LOGIN]: '/login',
	[Routes.REGISTER]: '/register',
	[Routes.NOT_FOUND]: '*'
};

export const RoutesConfig: Record<Routes, RoutesProps> = {
	[Routes.MAIN]: {
		path: RoutesPaths.main,
		authOnly: true,
		element: <MainPage />
	},
	[Routes.HISTORY]: {
		path: RoutesPaths.history,
		element: <HistoryPage />,
		authOnly: true
	},
	[Routes.LOGIN]: {
		path: RoutesPaths.login,
		element: <LoginPage />
	},
	[Routes.REGISTER]: {
		path: RoutesPaths.register,
		element: <RegisterPage />
	},
	[Routes.NOT_FOUND]: {
		path: RoutesPaths.not_found,
		element: <NotFoundPage />
	}
};
