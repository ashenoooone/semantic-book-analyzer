import React from 'react';
import cls from './MainPage.module.scss';
import { SendFiles, UploadFiles } from '~/features/uploadFiles';
import { HistoryList } from '~/entities/History';

export default function MainPage() {
	return (
		<div className={cls.MainPage}>
			<div className={cls.upload}>
				<UploadFiles />
				<SendFiles className={cls.send_btn}>Отправить</SendFiles>
			</div>
			<HistoryList
				items={[
					{
						title: 'Математика в дискретке',
						id: '213123213',
						tags: ['математика', 'дискретка', 'логика']
					},
					{
						title: 'Русский',
						id: '213123213',
						tags: ['математика', 'дискретка', 'логика']
					},
					{
						title: 'Литература',
						id: '213123213',
						tags: ['математика', 'дискретка', 'логика']
					}
				]}
			/>
		</div>
	);
}
