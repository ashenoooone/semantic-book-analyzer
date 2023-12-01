import React, { memo, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '~/shared/lib/classNames';
import cls from './SendFiles.module.scss';
import { Button } from '~/shared/ui/Button';
import { getUploadFilesFiles } from '../../model/selectors/selectors';
import { useSendFilesMutation } from '~/features/uploadFiles/api/uploadFilesApi';

interface SendFilesProps {
	className?: string;
	children?: ReactNode;
}

export const SendFiles = memo((props: SendFilesProps) => {
	const files = useSelector(getUploadFilesFiles);
	const [sendFiles, result] = useSendFilesMutation();

	const onSendFilesClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			const formData = new FormData();
			files.forEach((file, index) => {
				formData.append('files', file);
			});
			sendFiles({ files: formData });
		},
		[files, sendFiles]
	);

	const { className = '', children } = props;

	return (
		<Button
			className={classNames(cls.SendFiles, {}, [className])}
			onClick={onSendFilesClick}
		>
			{children}
		</Button>
	);
});
