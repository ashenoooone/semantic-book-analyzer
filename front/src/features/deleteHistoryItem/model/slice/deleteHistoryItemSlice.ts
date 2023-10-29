import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const deleteHistoryItemSlice = createSlice({
  name: 'deleteHistoryItemSlice',
  initialState,
  reducers: {
  },
});

export const { actions: deleteHistoryItemSliceActions } = deleteHistoryItemSlice;
export const { reducer: deleteHistoryItemSliceReducer } = deleteHistoryItemSlice;
