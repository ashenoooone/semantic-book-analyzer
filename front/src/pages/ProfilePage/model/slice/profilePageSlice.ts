import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const ProfilePageSlice = createSlice({
  name: 'ProfilePageSlice',
  initialState,
  reducers: {
  },
});

export const { actions: ProfilePageSliceActions } = ProfilePageSlice;
export const { reducer: ProfilePageSliceReducer } = ProfilePageSlice;
