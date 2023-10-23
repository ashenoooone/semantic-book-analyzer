import React, { memo, ReactNode } from 'react';
import { classNames } from '~/shared/lib/classNames';
import cls from './SendFiles.module.scss';
import { Button } from '~/shared/ui/Button';

interface SendFilesProps {
	className?: string;
	children?: ReactNode;
}

export const SendFiles = memo((props: SendFilesProps) => {
	const { className = '', children } = props;
	return (
		<Button className={classNames(cls.SendFiles, {}, [className])}>
			{children}
		</Button>
	);
});
