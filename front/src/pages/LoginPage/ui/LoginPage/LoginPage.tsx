import React from 'react';
import cls from './LoginPage.module.scss';
import { DynamicModuleLoader } from '~/shared/ui/DynamicModuleLoader';
import { AuthUser, authUserSliceReducer } from '~/features/authUser';

const LoginPage = () => {
	return (
		<DynamicModuleLoader
			reducers={{ loginForm: authUserSliceReducer }}
		>
			<div className={cls.LoginPage}>
				<AuthUser />
			</div>
		</DynamicModuleLoader>
	);
};

export default LoginPage;
