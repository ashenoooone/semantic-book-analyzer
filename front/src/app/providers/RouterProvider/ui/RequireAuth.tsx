import React, { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPaths } from '~/shared/config/router/routerConfig';

interface RequireAuthProps {
	children: JSX.Element;
}

export const RequireAuth = (props: RequireAuthProps) => {
	const { children } = props;
	const isAuth = true;
	const location = useLocation();

	if (!isAuth) {
		return (
			<Navigate
				to={RoutesPaths.login}
				replace
				state={{ from: location }}
			/>
		);
	}

	return children;
};
