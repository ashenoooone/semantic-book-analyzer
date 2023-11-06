import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import {
	getAuthUserPassword,
	getAuthUserUsername
} from '../model/selectors/authUserSelectors';
import { UserSliceActions } from '~/entities/User';
import { USER_LOCALSTORAGE_KEY } from '~/shared/consts/localStorage';
import { AuthServerResponse } from '~/features/authUser/model/types';

export const authUserThunk = createAsyncThunk<
	AuthServerResponse,
	void,
	ThunkConfig<string>
>('authUserThunk', async (_, thunkAPI) => {
	const username = getAuthUserUsername(thunkAPI.getState());
	const password = getAuthUserPassword(thunkAPI.getState());
	try {
		const response =
			await thunkAPI.extra.api.post<AuthServerResponse>(
				'/v1/user/auth/jwt/login',
				{ username, password },
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			);
		if (!response.data || response.status !== 200) {
			throw new Error('ошибка');
		}
		thunkAPI.dispatch(UserSliceActions.setUserLogin(username));
		localStorage.setItem(
			USER_LOCALSTORAGE_KEY,
			JSON.stringify(response.data.access_token)
		);
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('error');
	}
});
