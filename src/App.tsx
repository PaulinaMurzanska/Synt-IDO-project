import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IDOcomponentView from './views/IDOcomponentView';
import NavContext from './context/NavContext';

function App() {
	return (
		<NavContext>
			<BrowserRouter>
				<IDOcomponentView />
			</BrowserRouter>
		</NavContext>
	);
}

export default App;
