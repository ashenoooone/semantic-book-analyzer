import React, { FC, ReactNode, useCallback } from 'react';
import cls from './HistoryList.module.scss';
import { HistoryItem } from '../../model/types';
import { HistoryListItem } from '../HistoryListItem/HistoryListItem';
import { classNames } from '~/shared/lib/classNames';
import { Text } from '~/shared/ui/Text';

interface HistoryProps {
	className?: string;
	items?: HistoryItem[];
}

export const HistoryList = (props: HistoryProps) => {
	const { className = '', items } = props;

	const renderHistoryItem = useCallback((item: HistoryItem) => {
		return (
			<HistoryListItem
				key={item.id}
				item={item}
			/>
		);
	}, []);

	return (
		<div className={classNames(cls.History, {}, [className])}>
			{items?.map(renderHistoryItem) ?? <Text title='Пусто' />}
		</div>
	);
};
