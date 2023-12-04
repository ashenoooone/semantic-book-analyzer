import { HistoryItem } from '~/entities/History';
import { rtkApi } from '~/shared/api/rtkApi';
import { HistoryFiltersSchema } from '~/features/historyFilters';

export interface FetchHistoryAnswer {
	data?: HistoryItem[];
}

const fetchHistoryApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchHistory: build.query<
			FetchHistoryAnswer,
			HistoryFiltersSchema
		>({
			providesTags: ['history'],
			query: (filters) => ({
				url: '/v1/results/',
				method: 'GET',
				params: {
					limit: filters?.limit ?? 10,
					searchText: filters?.searchText,
					page: filters?.page,
					order: filters?.order
				}
			})
		})
	})
});

export const { useFetchHistoryQuery } = fetchHistoryApi;
