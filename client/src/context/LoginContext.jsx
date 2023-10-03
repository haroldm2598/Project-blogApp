import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProtectedContext = createContext();

export function ProtectedContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(undefined);

	function getProtected() {
		const token = localStorage.getItem('token');
		axios
			.get('http://localhost:3000/users/protected', {
				headers: { Authorization: token },
				withCredentials: true
			})
			.then((res) => {
				setLoggedIn(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		// const response = await Axios({
		// 	method: 'GET',
		// 	url: 'http://localhost:3000/users/protected',
		// 	headers: { Authorization: token },
		// 	withCredentials: true
		// });

		// setLoggedIn(response.data);
	}

	useEffect(() => {
		// try to use logic here only will work if is true console.log(work) else console.log(false)
		getProtected();
	}, []);

	return (
		<ProtectedContext.Provider value={{ loggedIn, setLoggedIn, getProtected }}>
			{children}
		</ProtectedContext.Provider>
	);
}
