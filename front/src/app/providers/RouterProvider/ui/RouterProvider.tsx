import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	RoutesConfig,
	RoutesProps
} from '~/shared/config/router/routerConfig';
import { RequireAuth } from '~/app/providers/RouterProvider/ui/RequireAuth';

export const RouterProvider = memo(() => {
	const RenderRoute = useCallback((route: RoutesProps) => {
		const element = <Suspense>{route.element}</Suspense>;

		if (route.authOnly) {
			return (
				<Route
					key={route.path}
					element={<RequireAuth>{element}</RequireAuth>}
					path={route.path}
				/>
			);
		}

		return (
			<Route
				key={route.path}
				element={element}
				path={route.path}
			/>
		);
	}, []);

	return (
		<Routes>{Object.values(RoutesConfig).map(RenderRoute)}</Routes>
	);
});
