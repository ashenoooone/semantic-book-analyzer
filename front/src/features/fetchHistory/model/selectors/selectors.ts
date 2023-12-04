import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getHistoryList = (state: StateSchema) =>
	state?.historyItems;

export const getHistoryListIsLoading = createSelector(
	getHistoryList,
	(s) => s?.isLoading
);

export const getHistoryListData = createSelector(
	getHistoryList,
	(s) => s?.data
);

export const getHistoryListError = createSelector(
	getHistoryList,
	(s) => s?.error
);
