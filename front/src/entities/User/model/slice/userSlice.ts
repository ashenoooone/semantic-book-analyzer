import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types';
import { initUserThunk } from '~/features/authUser';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
	name: 'UserSlice',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserSchema>) => {
			state.mounted = true;
			return action.payload;
		},
		setMounted: (state, action: PayloadAction<boolean>) => {
			state.mounted = action.payload;
		},
		setUserLogin: (state, action: PayloadAction<string>) => {
			state.mounted = true;
			state.email = action.payload;
		},
		clearUser: (state) => ({ ...initialState, mounted: true })
	},
	extraReducers: (builder) => {
		builder.addCase(initUserThunk.fulfilled, (state, action) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.isActive = action.payload.is_active;
			state.is_verified = action.payload.is_verified;
			state.is_superuser = action.payload.is_superuser;
			state.mounted = true;
		});
		builder.addCase(initUserThunk.pending, (state, action) => {
			state.mounted = false;
		});
		builder.addCase(initUserThunk.rejected, (state, action) => {
			state.mounted = true;
		});
	}
});

export const { actions: UserSliceActions } = UserSlice;
export const { reducer: UserSliceReducer } = UserSlice;
