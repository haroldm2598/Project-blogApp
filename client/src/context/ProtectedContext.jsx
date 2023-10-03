import { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const ProtectedContext = createContext();

export function ProtectedContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(undefined);

	// CONS CAN'T USE INSIDE CONTEXT OF USENAVIGATION
	// instead of using protected why not use blog protected
	async function getProtected() {
		try {
			const token = localStorage.getItem('token');
			const response = await Axios({
				method: 'GET',
				url: 'http://localhost:3000/users/protected',
				headers: { Authorization: token },
				withCredentials: true
			});

			setLoggedIn(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		// try to use logic here only will work if is true console.log(work) else console.log(false)
		if (loggedIn) {
			getProtected();
		}
		return;
	}, []);

	return (
		<ProtectedContext.Provider value={{ loggedIn, setLoggedIn, getProtected }}>
			{children}
		</ProtectedContext.Provider>
	);
}
