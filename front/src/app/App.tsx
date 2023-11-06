import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from './providers/RouterProvider';
import { Navbar } from '~/widgets/Navbar';
import { initUserThunk } from '~/features/authUser';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch';
import { getUserMounted } from '~/entities/User';

export function App() {
	const dispatch = useAppDispatch();
	const userMounted = useSelector(getUserMounted);

	useEffect(() => {
		dispatch(initUserThunk());
	}, [dispatch]);

	return (
		<div className='app'>
			<Navbar />
			<div className='content-page'>
				{userMounted && <RouterProvider />}
			</div>
		</div>
	);
}
