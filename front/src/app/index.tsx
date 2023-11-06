import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { App } from './App';
import './styles/index.scss';
import { StoreProvider } from './providers/StoreProvider';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider>
				<App />
				<ToastContainer />
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>
);
