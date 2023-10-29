import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const uploadFilesSlice = createSlice({
	name: 'uploadFilesSlice',
	initialState,
	reducers: {}
});

export const { actions: uploadFilesSliceActions } = uploadFilesSlice;
export const { reducer: uploadFilesSliceReducer } = uploadFilesSlice;
