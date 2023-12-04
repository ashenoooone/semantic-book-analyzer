import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getHistoryFilters = (state: StateSchema) =>
	state.historyFilers;

export const getHistoryFiltersLimit = createSelector(
	getHistoryFilters,
	(s) => s?.limit
);

export const getHistoryFiltersOrder = createSelector(
	getHistoryFilters,
	(s) => s?.order
);

export const getHistoryFiltersSearchText = createSelector(
	getHistoryFilters,
	(s) => s?.searchText
);

export const getHistoryFiltersPage = createSelector(
	getHistoryFilters,
	(s) => s?.page
);

export const getHistoryFiltersTotalPages = createSelector(
	getHistoryFilters,
	(s) => s?.totalPages
);
