import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesConfig, RoutesProps } from '~/shared/config/router/routerConfig';

export const RouterProvider = memo(() => {
	const RenderRoute = useCallback((route: RoutesProps) => {
		const element = <Suspense>{route.element}</Suspense>;

		return (
			<Route
				key={route.path}
				element={element}
				path={route.path}
			/>
		);
	}, []);

	return <Routes>{Object.values(RoutesConfig).map(RenderRoute)}</Routes>;
});
