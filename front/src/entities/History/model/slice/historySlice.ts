import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const HistorySlice = createSlice({
  name: 'HistorySlice',
  initialState,
  reducers: {
  },
});

export const { actions: HistorySliceActions } = HistorySlice;
export const { reducer: HistorySliceReducer } = HistorySlice;
