import React, { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
	ReduxStoreWithReducerManager,
	StateSchema,
	StateSchemaKey
} from '~/app/providers/StoreProvider';

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
	children?: ReactNode;
	reducers: ReducerList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (
	props: DynamicModuleLoaderProps
) => {
	const { children, reducers, removeAfterUnmount = true } = props;
	const store = useStore() as ReduxStoreWithReducerManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			const keyedName = name as StateSchemaKey;
			if (!store.reducerManager.getReducerMap()[keyedName]) {
				store.reducerManager.add(keyedName, reducer);
				store.dispatch({ type: `@INIT ${name} store` });
			}
		});
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					store.dispatch({ type: `@REMOVE ${name} store` });
				});
			}
		};
	}, []);

	// eslint-disable-next-line
	return <>{children}</>;
};
