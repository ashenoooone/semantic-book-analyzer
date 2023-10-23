import React, { FC, ReactNode } from 'react';
import cls from './MainPage.module.scss';
import { SendFiles, UploadFiles } from '~/features/uploadFiles';

export default function MainPage() {
	return (
		<div className={cls.MainPage}>
			<div className={cls.upload}>
				<UploadFiles />
				<SendFiles className={cls.send_btn}>Отправить</SendFiles>
			</div>
		</div>
	);
}
