import React, { FC, ReactNode, useState } from 'react';
import cls from './HistoryPage.module.scss';
import {
	HistoryFilters,
	historyFiltersSliceReducer
} from '~/features/historyFilters';
import { DynamicModuleLoader } from '~/shared/ui/DynamicModuleLoader';
import {
	FetchHistory,
	fetchHistoryReducer,
	FetchHistoryThunk
} from '~/features/fetchHistory';
import { History } from '~/widgets/History';

const HistoryPage = () => {
	return (
		<div className={cls.HistoryPage}>
			<History />
		</div>
	);
};

export default HistoryPage;
