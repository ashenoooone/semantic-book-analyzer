import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getUser = (state: StateSchema) => state.user;

export const getUserUsername = createSelector(
	getUser,
	(u) => u.email
);

export const getUserMounted = createSelector(
	getUser,
	(u) => u.mounted
);
