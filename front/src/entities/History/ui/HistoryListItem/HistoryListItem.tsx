import React, { memo } from 'react';
import cls from './HistoryListItem.module.scss';
import { HistoryItem } from '../../model/types';
import { Tab } from '~/shared/ui/Tab';
import { Disclosure } from '~/shared/ui/Disclosure';

interface HistoryListItemProps {
	className?: string;
	item?: HistoryItem;
}

export const HistoryListItem = memo((props: HistoryListItemProps) => {
	const { className = '', item } = props;
	return (
		<Disclosure
			className={className}
			title={`${item?.bookTitle.split('.')[0]} ${new Date(
				item.time
			).toLocaleString()}`}
		>
			<h2 className={cls.panel_header}>Словарь</h2>
			<div className={cls.tabs}>
				{item.tags.map((i) => (
					<Tab key={i}>{i}</Tab>
				))}
			</div>
		</Disclosure>
	);
});
