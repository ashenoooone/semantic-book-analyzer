import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const LoginPageSlice = createSlice({
  name: 'LoginPageSlice',
  initialState,
  reducers: {
  },
});

export const { actions: LoginPageSliceActions } = LoginPageSlice;
export const { reducer: LoginPageSliceReducer } = LoginPageSlice;
