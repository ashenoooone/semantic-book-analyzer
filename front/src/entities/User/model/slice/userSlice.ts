import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
	name: 'UserSlice',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserSchema>) => {
			return action.payload;
		}
	}
});

export const { actions: UserSliceActions } = UserSlice;
export const { reducer: UserSliceReducer } = UserSlice;
