import { HistoryItem } from '~/entities/History';

export interface FetchHistorySchema {
	data: HistoryItem[];
	isLoading?: boolean;
	error?: null | string;
}
