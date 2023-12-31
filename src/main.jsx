import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'src/router';
import { DarkModeContextProvider } from './context/DarkModeContext';
import { AuthContextProvider } from 'src/context/AuthContext';
import { BookmarksContextProvider } from 'src/context/BookmarksContext';
import { ConfirmContextProvider } from 'src/context/ConfirmContext';
import 'src/sass/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<AuthContextProvider>
				<BookmarksContextProvider>
					<ConfirmContextProvider>
						<Router />
					</ConfirmContextProvider>
				</BookmarksContextProvider>
			</AuthContextProvider>
		</DarkModeContextProvider>
	</React.StrictMode>
);
