import { HistoryItem } from '~/entities/History';
import { rtkApi } from '~/shared/api/rtkApi';

export interface FetchHistoryApi {
	limit?: number;
}

export interface FetchHistoryAnswer {
	data?: HistoryItem[];
}

const fetchHistoryApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchHistory: build.query<FetchHistoryAnswer, FetchHistoryApi>({
			providesTags: ['history'],
			query: (props) => ({
				url: '/v1/results/',
				method: 'GET',
				params: {
					limit: props.limit
				}
			})
		})
	})
});

export const { useFetchHistoryQuery } = fetchHistoryApi;
