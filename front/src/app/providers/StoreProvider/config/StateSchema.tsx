import {
	CombinedState,
	PayloadAction,
	Reducer,
	ReducersMapObject
} from '@reduxjs/toolkit';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { AxiosInstance } from 'axios';
import { rtkApi } from '~/shared/api/rtkApi';
import { UserSchema } from '~/entities/User';
import { AuthUserSchema } from '~/features/authUser';
import { RegisterUserSchema } from '~/features/registerUser';

export interface StateSchema {
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
	user: UserSchema;
	// async
	loginForm?: AuthUserSchema;
	registerForm?: RegisterUserSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (
		state: StateSchema,
		action: PayloadAction<Reducer>
	) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
	navigate?: (to: To, options?: NavigateOptions) => void;
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
