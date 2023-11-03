import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const RegisterPageSlice = createSlice({
  name: 'RegisterPageSlice',
  initialState,
  reducers: {
  },
});

export const { actions: RegisterPageSliceActions } = RegisterPageSlice;
export const { reducer: RegisterPageSliceReducer } = RegisterPageSlice;
