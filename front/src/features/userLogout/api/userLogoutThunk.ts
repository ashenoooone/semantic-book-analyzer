import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '~/shared/consts/localStorage';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import { UserSliceActions } from '~/entities/User';

export const userLogoutThunk = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('userLogoutThunk', async (_, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.post(
			'/v1/user/auth/jwt/logout',
			{}
		);
		localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		thunkAPI.dispatch(UserSliceActions.clearUser());
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('ERROR');
	}
});
