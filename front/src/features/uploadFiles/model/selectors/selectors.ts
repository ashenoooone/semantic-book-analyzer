import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '~/app/providers/StoreProvider';

export const getUploadFilesSlice = (state: StateSchema) =>
	state.uploadFiles;

export const getUploadFilesFiles = createSelector(
	getUploadFilesSlice,
	(s) => s?.files ?? []
);
