import React from 'react';
import cls from './MainPage.module.scss';
import {
	SendFiles,
	UploadFiles,
	uploadFilesSliceReducer
} from '~/features/uploadFiles';
import { DynamicModuleLoader } from '~/shared/ui/DynamicModuleLoader';
import { FetchHistory } from '~/features/fetchHistory';
import { Text } from '~/shared/ui/Text';

export default function MainPage() {
	return (
		<DynamicModuleLoader
			reducers={{
				uploadFiles: uploadFilesSliceReducer
			}}
		>
			<div className={cls.MainPage}>
				<div className={cls.upload}>
					<UploadFiles />
					<SendFiles className={cls.send_btn}>Отправить</SendFiles>
				</div>
				<div>
					<Text
						title='Последние 10 запросов'
						className='mb-4'
					/>
					<FetchHistory />
				</div>
			</div>
		</DynamicModuleLoader>
	);
}
