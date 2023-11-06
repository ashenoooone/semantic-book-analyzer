import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RegisterUserSchema } from '~/features/registerUser';
import { RegisterUserErrors } from '~/features/registerUser/model/types';
import { registerUserThunk } from '~/features/registerUser/api/registerUserThunk';

const initialState: RegisterUserSchema = {
	passwordConfirm: '',
	errors: [],
	password: '',
	username: '',
	isLoading: false,
	error: null
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
	},
	extraReducers: (builder) => {
		builder.addCase(registerUserThunk.pending, (state, action) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(registerUserThunk.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(registerUserThunk.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
		});
	}
});

export const { actions: registerUserSliceActions } =
	registerUserSlice;
export const { reducer: registerUserSliceReducer } =
	registerUserSlice;
