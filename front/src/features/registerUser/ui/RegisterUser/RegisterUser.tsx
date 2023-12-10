import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import cls from './RegisterUser.module.scss';
import { Input } from '~/shared/ui/Input';
import { Text } from '~/shared/ui/Text';
import { Button } from '~/shared/ui/Button';
import {
	getRegisterUserErrors,
	getRegisterUserPassword,
	getRegisterUserPasswordConfirm,
	getRegisterUserUsername
} from '../../model/selectors/registerUserSelectors';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch';
import { registerUserSliceActions } from '~/features/registerUser';
import { RegisterUserErrors } from '~/features/registerUser/model/types';
import { registerUserThunk } from '~/features/registerUser/api/registerUserThunk';
import { RoutesPaths } from '~/shared/config/router/routerConfig';
import { AppLink } from '~/shared/ui/AppLink';

export const RegisterUser = () => {
	const username = useSelector(getRegisterUserUsername);
	const password = useSelector(getRegisterUserPassword);
	const passwordConfirm = useSelector(getRegisterUserPasswordConfirm);
	const errors = useSelector(getRegisterUserErrors);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onUsernameChange = useCallback(
		(val: string) => {
			if (
				!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
			) {
				dispatch(
					registerUserSliceActions.addError(
						RegisterUserErrors.INVALID_EMAIL
					)
				);
			} else {
				dispatch(
					registerUserSliceActions.removeError(
						RegisterUserErrors.INVALID_EMAIL
					)
				);
			}
			dispatch(registerUserSliceActions.setUsername(val));
		},
		[dispatch]
	);

	const onPasswordChange = useCallback(
		(val: string) => {
			dispatch(registerUserSliceActions.setPassword(val));
		},
		[dispatch]
	);

	const onPasswordConfirmChange = useCallback(
		(val: string) => {
			if (password !== val) {
				dispatch(
					registerUserSliceActions.addError(
						RegisterUserErrors.PASSWORD_NOT_EQUALS
					)
				);
			} else {
				dispatch(
					registerUserSliceActions.removeError(
						RegisterUserErrors.PASSWORD_NOT_EQUALS
					)
				);
			}
			dispatch(registerUserSliceActions.setPasswordConfirm(val));
		},
		[dispatch, password]
	);
	const onFormSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			dispatch(registerUserThunk()).then(() => {
				toast('Регистрация успешно завершена', {
					type: 'success'
				});
				navigate(RoutesPaths.login);
			});
		},
		[dispatch, navigate]
	);

	return (
		<form
			className={cls.RegisterUser}
			onSubmit={onFormSubmit}
		>
			<div className={cls.heading}>Форма регистрации</div>
			<div className={cls.form}>
				<Input
					required
					value={username}
					label='Почта'
					onChange={onUsernameChange}
				/>
				<Input
					required
					value={password}
					label='Пароль'
					onChange={onPasswordChange}
				/>
				<Input
					required
					value={passwordConfirm}
					label='Подтвердите пароль'
					onChange={onPasswordConfirmChange}
				/>
			</div>
			<div className='flex flex-col mt-2 mb-2'>
				{errors.length > 0 &&
					errors.map((e) => (
						<Text
							error
							text={e}
						/>
					))}
			</div>
			<AppLink
				className={cls.link}
				to={RoutesPaths.login}
			>
				Есть аккаунт? Авторизоваться
			</AppLink>
			<Button
				type='submit'
				disabled={errors.length > 0}
				theme='inverted'
				className={cls.button}
			>
				Авторизоваться
			</Button>
		</form>
	);
};
