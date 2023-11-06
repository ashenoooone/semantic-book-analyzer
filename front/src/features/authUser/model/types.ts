export interface AuthUserSchema {
	username?: string;
	password?: string;
	isLoading?: boolean;
	error?: string;
}

export interface AuthServerResponse {
	access_token: string;
	token_type: string;
}
