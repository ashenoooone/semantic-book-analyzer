import React, { JSX, useLayoutEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RoutesPaths } from '~/shared/config/router/routerConfig';
import { getUserUsername } from '~/entities/User/model/selectors/getUserSlice';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch';
import { initUserThunk } from '~/features/authUser';

interface RequireAuthProps {
	children: JSX.Element;
}

export const RequireAuth = (props: RequireAuthProps) => {
	const { children } = props;
	const isAuth = useSelector(getUserUsername);
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
