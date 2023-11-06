import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '~/shared/consts/localStorage';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import { InitUserServerResponse } from '../model/types';
import { UserSliceActions } from '~/entities/User';

export const initUserThunk = createAsyncThunk<
	InitUserServerResponse,
	void,
	ThunkConfig<string>
>('initUserThunk', async (_, thunkAPI) => {
	const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
	if (!token) {
		return thunkAPI.rejectWithValue('no token');
	}
	try {
		const response =
			await thunkAPI.extra.api.get<InitUserServerResponse>(
				'/v1/user/users/me'
			);
		if (response.status !== 200 || !response.data) {
			return thunkAPI.rejectWithValue('error');
		}
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('error');
	}
});
