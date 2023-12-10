import React, { FC, memo, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import cls from './FetchHistory.module.scss';
import { classNames } from '~/shared/lib/classNames';
import {
	getHistoryListData,
	getHistoryListError,
	getHistoryListIsLoading
} from '~/features/fetchHistory';
import { HistoryList } from '~/entities/History';
import { Spinner } from '~/shared/ui/Spinner';

interface FetchHistoryThunkProps {
	className?: string;
}

export const FetchHistoryThunk = memo(
	(props: FetchHistoryThunkProps) => {
		const { className = '' } = props;
		const isLoading = useSelector(getHistoryListIsLoading);
		const data = useSelector(getHistoryListData);
		const error = useSelector(getHistoryListError);
		if (isLoading) {
			return <Spinner />;
		}
		if (error) {
			return <div>error</div>;
		}
		return (
			<HistoryList
				className={classNames(cls.FetchHistory, {}, [className])}
				items={data}
			/>
		);
	}
);
