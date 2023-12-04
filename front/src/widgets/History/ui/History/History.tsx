import React, { FC, memo, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './History.module.scss';
import {
	HistoryFilters,
	historyFiltersSliceReducer
} from '~/features/historyFilters';
import {
	fetchHistoryReducer,
	fetchHistoryThunk,
	FetchHistoryThunk
} from '~/features/fetchHistory';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch';
import { DynamicModuleLoader } from '~/shared/ui/DynamicModuleLoader';
import { initHistory } from '../../api/initHistory';

export const History = memo(() => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(initHistory());
	}, [dispatch]);

	return (
		<DynamicModuleLoader
			reducers={{
				historyFilers: historyFiltersSliceReducer,
				historyItems: fetchHistoryReducer
			}}
		>
			<HistoryFilters className='flex-shrink basis-1/3' />
			<FetchHistoryThunk className='flex-grow-0 basis-2/3' />
		</DynamicModuleLoader>
	);
});
