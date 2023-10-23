import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainPage } from '~/pages/MainPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { HistoryPage } from '~/pages/HistoryPage';

export type RoutesProps = RouteProps;

export enum Routes {
	MAIN = 'main',
	HISTORY = 'history',
	NOT_FOUND = 'not_found'
}

export const RoutesPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.HISTORY]: '/history',
	[Routes.NOT_FOUND]: '*'
};

export const RoutesConfig: Record<Routes, RoutesProps> = {
	[Routes.MAIN]: {
		path: RoutesPaths.main,
		element: <MainPage />
	},
	[Routes.HISTORY]: {
		path: RoutesPaths.history,
		element: <HistoryPage />
	},
	[Routes.NOT_FOUND]: {
		path: RoutesPaths.not_found,
		element: <NotFoundPage />
	}
};
