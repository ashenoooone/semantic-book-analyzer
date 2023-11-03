import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterUserSchema } from '~/features/registerUser';
import { RegisterUserErrors } from '~/features/registerUser/model/types';

const initialState: RegisterUserSchema = {
	passwordConfirm: '',
	errors: [],
	password: '',
	username: ''
};

export const registerUserSlice = createSlice({
	name: 'registerUserSlice',
	initialState,
	reducers: {
		setPasswordConfirm: (state, action: PayloadAction<string>) => {
			state.passwordConfirm = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		addError: (state, action: PayloadAction<RegisterUserErrors>) => {
			if (!state.errors.includes(action.payload)) {
				state.errors.push(action.payload);
			}
		},
		removeError: (
			state,
			action: PayloadAction<RegisterUserErrors>
		) => {
			state.errors = state.errors.filter((e) => e !== action.payload);
		}
	}
});

export const { actions: registerUserSliceActions } =
	registerUserSlice;
export const { reducer: registerUserSliceReducer } =
	registerUserSlice;
