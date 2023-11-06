import React from 'react';
import { useSelector } from 'react-redux';
import cls from './ProfilePage.module.scss';
import { getUser, Profile } from '~/entities/User';

const ProfilePage = () => {
	const user = useSelector(getUser);

	return (
		<div className={cls.ProfilePage}>
			<Profile user={user} />
		</div>
	);
};

export default ProfilePage;
