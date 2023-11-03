import React, { FC, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './AuthUser.module.scss';
import { Input } from '~/shared/ui/Input';
import { Button } from '~/shared/ui/Button';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch';
import { authUserSliceActions } from '../../model/slice/authUserSlice';
import {
	getAuthUser,
	getAuthUserPassword,
	getAuthUserUsername
} from '~/features/authUser/model/selectors/authUserSelectors';

export const AuthUser = () => {
	const dispatch = useAppDispatch();
	const username = useSelector(getAuthUserUsername);
	const password = useSelector(getAuthUserPassword);

	const onLoginPage = useCallback(
		(val: string) => {
			dispatch(authUserSliceActions.setUsername(val));
		},
		[dispatch]
	);

	const onPasswordChange = useCallback(
		(val: string) => {
			dispatch(authUserSliceActions.setPassword(val));
		},
		[dispatch]
	);

	return (
		<div className={cls.AuthUser}>
			<div className={cls.heading}>Форма авторизации</div>
			<div className={cls.form}>
				<Input
					value={username}
					label='Логин'
					onChange={onLoginPage}
				/>
				<Input
					value={password}
					label='Пароль'
					type='password'
					onChange={onPasswordChange}
				/>
			</div>
			<Button
				theme='inverted'
				className={cls.button}
			>
				Авторизоваться
			</Button>
		</div>
	);
};
