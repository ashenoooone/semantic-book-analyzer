import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const userLogoutSlice = createSlice({
  name: 'userLogoutSlice',
  initialState,
  reducers: {
  },
});

export const { actions: userLogoutSliceActions } = userLogoutSlice;
export const { reducer: userLogoutSliceReducer } = userLogoutSlice;
