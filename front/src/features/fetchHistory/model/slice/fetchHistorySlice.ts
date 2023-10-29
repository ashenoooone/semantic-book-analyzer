import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const fetchHistorySlice = createSlice({
  name: 'fetchHistorySlice',
  initialState,
  reducers: {
  },
});

export const { actions: fetchHistorySliceActions } = fetchHistorySlice;
export const { reducer: fetchHistorySliceReducer } = fetchHistorySlice;
