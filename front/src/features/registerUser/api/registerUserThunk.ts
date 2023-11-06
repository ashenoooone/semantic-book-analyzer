import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '~/app/providers/StoreProvider';
import { UserSchema } from '~/entities/User';
import {
	getRegisterUserPassword,
	getRegisterUserUsername
} from '../model/selectors/registerUserSelectors';

export const registerUserThunk = createAsyncThunk<
	UserSchema,
	void,
	ThunkConfig<string>
>('registerUserThunk', async (_, thunkAPI) => {
	const email = getRegisterUserUsername(thunkAPI.getState());
	const password = getRegisterUserPassword(thunkAPI.getState());
	try {
		const response = await thunkAPI.extra.api.post(
			'/v1/user/auth/register',
			{
				email,
				password,
				is_active: true,
				is_superuser: false,
				is_verified: false
			}
		);
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('error');
	}
});
