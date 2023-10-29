import React, { memo } from 'react';
import {
	MdOutlineExpandMore,
	MdOutlineExpandLess
} from 'react-icons/md';
import { Disclosure } from '@headlessui/react';
import { classNames } from '~/shared/lib/classNames';
import cls from './HistoryListItem.module.scss';
import { HistoryItem } from '../../model/types';
import { Tab } from '~/shared/ui/Tab';

interface HistoryListItemProps {
	className?: string;
	item?: HistoryItem;
}

export const HistoryListItem = memo((props: HistoryListItemProps) => {
	const { className = '', item } = props;
	return (
		<Disclosure
			as='div'
			className={classNames(cls.HistoryListItem, {}, [className])}
		>
			{({ open }) => (
				<>
					<header className={cls.header}>
						{item.title}
						<Disclosure.Button className={cls.btn}>
							{open ? (
								<MdOutlineExpandLess className={cls.icon} />
							) : (
								<MdOutlineExpandMore className={cls.icon} />
							)}
						</Disclosure.Button>
					</header>
					<Disclosure.Panel className={cls.panel}>
						<h2 className={cls.panel_header}>Словарь</h2>
						<div className={cls.tabs}>
							{item.tags.map((i) => (
								<Tab key={i}>{i}</Tab>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
});
