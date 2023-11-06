import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUserSchema } from '../types';
import { authUserThunk } from '~/features/authUser/api/authUserThunk';

const initialState: AuthUserSchema = {
	username: '',
	password: '',
	isLoading: false,
	error: null
};

export const authUserSlice = createSlice({
	name: 'authUserSlice',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(authUserThunk.pending, (state, action) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(authUserThunk.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(authUserThunk.fulfilled, (state, action) => {
			state.isLoading = true;
			state.error = null;
		});
	}
});

export const { actions: authUserSliceActions } = authUserSlice;
export const { reducer: authUserSliceReducer } = authUserSlice;
