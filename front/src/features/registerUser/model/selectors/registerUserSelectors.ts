import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getRegisterUserForm = (state: StateSchema) =>
	state.registerForm;

export const getRegisterUserUsername = createSelector(
	getRegisterUserForm,
	(form) => form?.username
);

export const getRegisterUserPassword = createSelector(
	getRegisterUserForm,
	(form) => form?.password
);

export const getRegisterUserPasswordConfirm = createSelector(
	getRegisterUserForm,
	(form) => form?.passwordConfirm
);

export const getRegisterUserErrors = createSelector(
	getRegisterUserForm,
	(form) => form?.errors ?? []
);
