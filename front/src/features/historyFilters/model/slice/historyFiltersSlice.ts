import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	HistoryFiltersSchema,
	OrderType
} from '~/features/historyFilters/model/types';

const initialState: HistoryFiltersSchema = {
	limit: 10,
	order: 'newest',
	page: 1,
	searchText: '',
	totalPages: 0
};

export const historyFiltersSlice = createSlice({
	name: 'historyFiltersSlice',
	initialState,
	reducers: {
		setLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setOrder: (state, action: PayloadAction<OrderType>) => {
			state.order = action.payload;
		},
		setSearchText: (state, action: PayloadAction<string>) => {
			state.searchText = action.payload;
		},
		setTotalPages: (state, action: PayloadAction<number>) => {
			state.totalPages = action.payload;
		}
	}
});

export const { actions: historyFiltersSliceActions } =
	historyFiltersSlice;
export const { reducer: historyFiltersSliceReducer } =
	historyFiltersSlice;
