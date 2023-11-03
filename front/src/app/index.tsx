import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/index.scss';
import { StoreProvider } from './providers/StoreProvider';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider>
				<App />
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>
);
