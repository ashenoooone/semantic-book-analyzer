import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
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

export const RegisterUser = () => {
	const username = useSelector(getRegisterUserUsername);
	const password = useSelector(getRegisterUserPassword);
	const passwordConfirm = useSelector(getRegisterUserPasswordConfirm);
	const errors = useSelector(getRegisterUserErrors);
	const dispatch = useAppDispatch();

	const onUsernameChange = useCallback(
		(val: string) => {
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
		[dispatch, password, passwordConfirm]
	);

	return (
		<form className={cls.RegisterUser}>
			<div className={cls.heading}>Форма авторизации</div>
			<div className={cls.form}>
				<Input
					required
					value={username}
					label='Логин'
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
