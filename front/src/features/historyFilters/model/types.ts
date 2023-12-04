export type OrderType = 'newest' | 'oldest';

export interface HistoryFiltersSchema {
	limit?: number;
	page?: number;
	order?: OrderType;
	searchText?: string;
	totalPages?: number;
}
