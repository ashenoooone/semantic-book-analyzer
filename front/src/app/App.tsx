import React from 'react';
import { RouterProvider } from './providers/RouterProvider';
import { Navbar } from '~/widgets/Navbar';

export function App() {
	return (
		<div className='app'>
			<Navbar />
			<div className='content-page'>
				<RouterProvider />
			</div>
		</div>
	);
}
