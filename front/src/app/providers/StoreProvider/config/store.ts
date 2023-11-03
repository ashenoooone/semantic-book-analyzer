import {
	CombinedState,
	configureStore,
	Reducer,
	ReducersMapObject
} from '@reduxjs/toolkit';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import {
	ReducerManager,
	StateSchema,
	ThunkExtraArg
} from '../config/StateSchema';
import { createReducerManager } from './reducerManager';
import { rtkApi } from '~/shared/api/rtkApi';
import { $api } from '~/shared/api/api';
import { UserSliceReducer } from '~/entities/User';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) {
	const reducerManager = createReducerManager({
		rtkApi: rtkApi.reducer,
		user: UserSliceReducer,
		...asyncReducers
	});

	const extraArg: ThunkExtraArg = {
		api: $api
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<
			CombinedState<StateSchema>
		>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg
				}
			}).concat(rtkApi.middleware)
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<
	typeof createReduxStore
>['dispatch'];

export interface ReduxStoreWithReducerManager
	extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}
