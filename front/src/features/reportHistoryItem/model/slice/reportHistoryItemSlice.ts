import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const reportHistoryItemSlice = createSlice({
  name: 'reportHistoryItemSlice',
  initialState,
  reducers: {
  },
});

export const { actions: reportHistoryItemSliceActions } = reportHistoryItemSlice;
export const { reducer: reportHistoryItemSliceReducer } = reportHistoryItemSlice;
