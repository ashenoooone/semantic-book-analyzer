import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const HistoryPageSlice = createSlice({
	name: 'HistoryPageSlice',
	initialState,
	reducers: {}
});

export const { actions: HistoryPageSliceActions } = HistoryPageSlice;
export const { reducer: HistoryPageSliceReducer } = HistoryPageSlice;
