// REACT LIB
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from 'react-router-dom';

// LAYOUT
import RootLayout from './layout/RootLayout';
// PAGES
import Homepage from './pages/Homepage';
import Writepage from './pages/Writepage';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Homepage />} />
				<Route path='Write' element={<Writepage />} />
			</Route>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
