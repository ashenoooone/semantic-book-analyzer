export interface HistorySchema {}

export interface HistoryItem {
	bookTitle: string;
	id: string;
	tags?: string[];
	time?: string;
}
