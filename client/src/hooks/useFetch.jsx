import { useState, useEffect } from 'react';
import Axios from 'axios';

export function useFetch(url) {
	const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		// setIsLoading(true);
		try {
			const response = await Axios({
				method: 'GET',
				url: url,
				withCredentials: true
			});

			setData(response.data);

			// setIsLoading(false);
		} catch (err) {
			console.log(err);

			// setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data };
}
