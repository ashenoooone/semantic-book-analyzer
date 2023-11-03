export enum RegisterUserErrors {
	PASSWORD_NOT_EQUALS = 'Пароли отличаются',
	DONT_EXIST = 'user dont exist',
	CONFIRM_PASSWORD_ERROR = 'confirm password error'
}

export interface RegisterUserSchema {
	username?: string;
	password?: string;
	passwordConfirm?: string;
	errors?: RegisterUserErrors[];
}
