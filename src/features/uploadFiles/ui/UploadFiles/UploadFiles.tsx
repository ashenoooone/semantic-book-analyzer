import React, { ReactNode } from 'react';
import cls from './UploadFiles.module.scss';

interface UploadFilesProps {
	className?: string;
	children?: ReactNode;
}

export const UploadFiles = (props: UploadFilesProps) => {
	const { className = '', children } = props;
	return <div className={cls.UploadFiles}>{children}</div>;
};
