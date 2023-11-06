import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '~/app/providers/StoreProvider';

export const profilePageThunk = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('profilePageThunk', async (_, thunkAPI) => {});
