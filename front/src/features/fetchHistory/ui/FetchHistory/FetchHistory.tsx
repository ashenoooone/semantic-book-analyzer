import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import cls from './FetchHistory.module.scss';
import { useFetchHistoryQuery } from '../../api/fetchHistoryApi';
import { HistoryList } from '~/entities/History';
import { Spinner } from '~/shared/ui/Spinner';
import { HistoryFiltersSchema } from '~/features/historyFilters';
import { getHistoryFilters } from '~/features/historyFilters/model/selectors/selectors';
import { classNames } from '~/shared/lib/classNames';

interface FetchHistoryProps {
	className?: string;
}

export const FetchHistory = (props: FetchHistoryProps) => {
	const { className = '' } = props;
	const filters = useSelector(getHistoryFilters);

	const { isLoading, data, isFetching, isError } =
		useFetchHistoryQuery(filters);

	if (isLoading || isFetching) {
		return <Spinner />;
	}

	if (isError) {
		return <div>Error occured</div>;
	}

	return (
		<HistoryList
			className={classNames(cls.FetchHistory, {}, [className])}
			items={data.data}
		/>
	);
};
