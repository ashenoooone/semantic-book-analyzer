import React, { FC, ReactNode } from 'react';
import cls from './FetchHistory.module.scss';
import { useFetchHistoryQuery } from '../../api/fetchHistoryApi';
import { HistoryList } from '~/entities/History';
import { Spinner } from '~/shared/ui/Spinner';

interface FetchHistoryProps {
	className?: string;
	limit?: number;
}

export const FetchHistory = (props: FetchHistoryProps) => {
	const { className = '', limit = 10 } = props;
	const { isLoading, data, isFetching, isError } =
		useFetchHistoryQuery({ limit });

	if (isLoading || isFetching) {
		return <Spinner />;
	}

	if (isError) {
		return <div>Error occured</div>;
	}

	return (
		<HistoryList
			className={cls.FetchHistory}
			items={data.data}
		/>
	);
};
