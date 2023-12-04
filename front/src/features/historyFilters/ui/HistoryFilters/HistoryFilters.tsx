import React, {
	FC,
	memo,
	ReactNode,
	useCallback,
	useState
} from 'react';
import { useSelector } from 'react-redux';
import cls from './HistoryFilters.module.scss';
import { Pagination } from '~/shared/ui/Pagination/ui/Pagination';
import {
	getHistoryFilters,
	getHistoryFiltersLimit,
	getHistoryFiltersOrder,
	getHistoryFiltersPage,
	getHistoryFiltersSearchText,
	getHistoryFiltersTotalPages
} from '../../model/selectors/selectors';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch';
import {
	historyFiltersSliceActions,
	OrderType
} from '~/features/historyFilters';
import { useTrottle } from '~/shared/hooks/useTrottle';
import { useDebounce } from '~/shared/hooks/useDebounce';
import { fetchHistoryThunk } from '~/features/fetchHistory';

interface HistoryFiltersProps {
	className?: string;
}

export const HistoryFilters = memo((props: HistoryFiltersProps) => {
	const { className = '' } = props;
	const order = useSelector(getHistoryFiltersOrder);
	const limit = useSelector(getHistoryFiltersLimit);
	const page = useSelector(getHistoryFiltersPage);
	const total = useSelector(getHistoryFiltersTotalPages);
	const searchText = useSelector(getHistoryFiltersSearchText);
	const dispatch = useAppDispatch();

	const fetchHistory = useCallback(() => {
		dispatch(fetchHistoryThunk());
	}, [dispatch]);

	const debouncedFetchHistory = useDebounce(fetchHistory, 500);

	const onPageChange = useCallback(
		(p: number) => {
			dispatch(historyFiltersSliceActions.setPage(p));
			debouncedFetchHistory();
		},
		[debouncedFetchHistory, dispatch]
	);

	const onSearchChangeText = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(
				historyFiltersSliceActions.setSearchText(event.target.value)
			);
			debouncedFetchHistory();
		},
		[debouncedFetchHistory, dispatch]
	);

	const onSortOrderChange = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			dispatch(
				historyFiltersSliceActions.setOrder(
					event.target.value as OrderType
				)
			);
			fetchHistory();
		},
		[dispatch, fetchHistory]
	);

	return (
		<div className={`${cls.HistoryFilters} ${className}`}>
			<div className=''>
				<label className='block mb-2'>Фильтр по названию:</label>
				<input
					value={searchText}
					type='text'
					className='border p-2 w-full'
					placeholder='Введите название'
					onChange={onSearchChangeText}
				/>
				<label className='block mt-4 mb-2'>
					Сортировать по дате:
				</label>
				<select
					value={order}
					className='border p-2 w-full'
					onChange={onSortOrderChange}
				>
					<option value='newest'>Сначала новые</option>
					<option value='oldest'>Сначала старые</option>
				</select>
			</div>
			<Pagination
				currentPage={page}
				itemsPerPage={limit ?? 10}
				totalItems={total}
				onPageChange={onPageChange}
			/>
		</div>
	);
});
