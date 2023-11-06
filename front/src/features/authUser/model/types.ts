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

export interface InitUserServerResponse {
	id: string;
	email: string;
	is_active: boolean;
	is_superuser: boolean;
	is_verified: boolean;
}
