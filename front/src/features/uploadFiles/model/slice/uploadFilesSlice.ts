import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UploadFilesSchema } from '~/features/uploadFiles/model/types';

const initialState: UploadFilesSchema = {
	files: []
};

export const uploadFilesSlice = createSlice({
	name: 'uploadFilesSlice',
	initialState,
	reducers: {
		setFiles: (state, action: PayloadAction<File[]>) => {
			state.files = action.payload;
		}
	}
});

export const { actions: uploadFilesSliceActions } = uploadFilesSlice;
export const { reducer: uploadFilesSliceReducer } = uploadFilesSlice;
