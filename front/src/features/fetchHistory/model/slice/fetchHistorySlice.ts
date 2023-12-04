import { createSlice } from '@reduxjs/toolkit';
import { FetchHistorySchema } from '../types';
import { fetchHistoryThunk } from '~/features/fetchHistory/api/fetchHistoryThunk';

const initialState: FetchHistorySchema = {
	data: [],
	isLoading: false,
	error: null
};

export const fetchHistorySlice = createSlice({
	name: 'fetchHistorySlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchHistoryThunk.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(fetchHistoryThunk.rejected, (state, action) => {
			state.isLoading = true;
			state.error = action.payload;
		});
		builder.addCase(fetchHistoryThunk.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.data = action.payload.data;
		});
	}
});

export const { actions: fetchHistoryActions } = fetchHistorySlice;
export const { reducer: fetchHistoryReducer } = fetchHistorySlice;
