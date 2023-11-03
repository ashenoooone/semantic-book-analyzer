import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUserSchema } from '../types';

const initialState: AuthUserSchema = {
	username: '',
	password: ''
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
	}
});

export const { actions: authUserSliceActions } = authUserSlice;
export const { reducer: authUserSliceReducer } = authUserSlice;
