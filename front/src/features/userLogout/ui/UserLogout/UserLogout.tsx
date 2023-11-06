import React, { FC, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/shared/ui/Button';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch';
import { userLogoutThunk } from '../../api/userLogoutThunk';
import { RoutesPaths } from '~/shared/config/router/routerConfig';

export const UserLogout = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onButtonClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			dispatch(userLogoutThunk()).then((r) => {
				if (r.type.includes('fulfilled')) {
					navigate(RoutesPaths.login);
				}
			});
		},
		[dispatch, navigate]
	);

	return (
		<Button
			className='my-2'
			onClick={onButtonClick}
		>
			Выйти
		</Button>
	);
};
