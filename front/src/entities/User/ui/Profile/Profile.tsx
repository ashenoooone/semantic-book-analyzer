import React from 'react';
import { UserSchema } from '~/entities/User';
import cls from './Profile.module.scss';
import { classNames } from '~/shared/lib/classNames';
import { Button } from '~/shared/ui/Button';
import { UserLogout } from '~/features/userLogout';

interface UserProfileProps {
	user: UserSchema;
}

export const Profile: React.FC<UserProfileProps> = ({ user }) => {
	return (
		<div className={classNames(cls.Profile, {}, [])}>
			<h2 className=''>Профиль</h2>
			<div className=''>
				<p>
					<strong>ID:</strong> {user.id || 'N/A'}
				</p>
				<p>
					<strong>Email:</strong> {user.email || 'N/A'}
				</p>
				<p>
					<strong>Active:</strong> {user.isActive ? 'Да' : 'Нет'}
				</p>
				<p>
					<strong>Superuser:</strong>{' '}
					{user.is_superuser ? 'Да' : 'Нет'}
				</p>
				<p>
					<strong>Verified:</strong> {user.is_verified ? 'Да' : 'Нет'}
				</p>
				<p>
					<strong>Mounted:</strong> {user.mounted ? 'Да' : 'Нет'}
				</p>
			</div>
			<UserLogout />
		</div>
	);
};
