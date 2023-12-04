import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import { HistoryItem } from '~/entities/History';
import {
	HistoryFiltersSchema,
	historyFiltersSliceActions
} from '~/features/historyFilters';
import { getHistoryFilters } from '~/features/historyFilters/model/selectors/selectors';

export interface FetchHistoryThunkAnswer {
	data: HistoryItem[];
	length?: number;
}
export const fetchHistoryThunk = createAsyncThunk<
	FetchHistoryThunkAnswer,
	void,
	ThunkConfig<string>
>('fetchHistoryThunk', async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
	const filters = getHistoryFilters(getState());
	const { limit, order, searchText, page } = filters;
	try {
		const response = await extra.api.get<FetchHistoryThunkAnswer>(
			'/v1/results/',
			{
				params: {
					limit,
					order,
					searchText,
					page
				}
			}
		);
		if (!response.data) {
			rejectWithValue('error');
		}
		dispatch(
			historyFiltersSliceActions.setTotalPages(response.data.length)
		);
		return response.data;
	} catch (e) {
		return rejectWithValue('error');
	}
});
