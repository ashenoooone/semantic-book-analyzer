export enum RegisterUserErrors {
	PASSWORD_NOT_EQUALS = 'Пароли отличаются',
	DONT_EXIST = 'user dont exist',
	CONFIRM_PASSWORD_ERROR = 'confirm password error',
	INVALID_EMAIL = 'Введите корректный адрес электронной почты'
}

export interface RegisterUserSchema {
	username?: string;
	password?: string;
	passwordConfirm?: string;
	errors?: RegisterUserErrors[];
	isLoading?: boolean;
	error?: string;
}
