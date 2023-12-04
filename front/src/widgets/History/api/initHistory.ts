import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import { fetchHistoryThunk } from '~/features/fetchHistory';

export const initHistory = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('initHistory', async (_, thunkAPI) => {
	const { dispatch } = thunkAPI;
	try {
		dispatch(fetchHistoryThunk());
	} catch (e) {
		console.log(e);
	}
});
