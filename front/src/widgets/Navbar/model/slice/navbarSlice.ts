import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const NavbarSlice = createSlice({
	name: 'NavbarSlice',
	initialState,
	reducers: {}
});

export const { actions: NavbarSliceActions } = NavbarSlice;
export const { reducer: NavbarSliceReducer } = NavbarSlice;
