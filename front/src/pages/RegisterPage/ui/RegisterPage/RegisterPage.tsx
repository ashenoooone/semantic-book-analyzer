import React, { FC, ReactNode } from 'react';
import cls from './RegisterPage.module.scss';
import { DynamicModuleLoader } from '~/shared/ui/DynamicModuleLoader';
import {
	RegisterUser,
	registerUserSliceReducer
} from '~/features/registerUser';

const RegisterPage = () => {
	return (
		<DynamicModuleLoader
			reducers={{ registerForm: registerUserSliceReducer }}
		>
			<div className={cls.RegisterPage}>
				<RegisterUser />
			</div>
		</DynamicModuleLoader>
	);
};

export default RegisterPage;
