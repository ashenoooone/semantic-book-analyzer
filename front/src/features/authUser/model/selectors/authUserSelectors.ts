import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getAuthUser = (state: StateSchema) => state?.loginForm;
export const getAuthUserUsername = createSelector(
	getAuthUser,
	(loginForm) => loginForm?.username
);

export const getAuthUserPassword = createSelector(
	getAuthUser,
	(loginForm) => loginForm?.password
);
