import React, { FC, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
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
import { authUserThunk } from '~/features/authUser/api/authUserThunk';
import { RoutesPaths } from '~/shared/config/router/routerConfig';
import { AppLink } from '~/shared/ui/AppLink';

export const AuthUser = () => {
	const dispatch = useAppDispatch();
	const username = useSelector(getAuthUserUsername);
	const password = useSelector(getAuthUserPassword);
	const navigate = useNavigate();

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
	const onFormSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			dispatch(authUserThunk()).then((r) => {
				if (r.type.includes('fulfilled')) {
					toast('Успешно', {
						type: 'success'
					});
					navigate(RoutesPaths.main);
				} else {
					toast(r.payload.toString(), {
						type: 'error'
					});
				}
			});
		},
		[dispatch]
	);

	return (
		<form
			className={cls.AuthUser}
			onSubmit={onFormSubmit}
		>
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
			<AppLink
				className={cls.link}
				to={RoutesPaths.register}
			>
				Нет аккаунта? Зарегистрироваться
			</AppLink>
			<Button
				theme='inverted'
				type='submit'
				className={cls.button}
			>
				Авторизоваться
			</Button>
		</form>
	);
};
