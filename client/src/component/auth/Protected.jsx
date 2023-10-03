// ==== OLD VERSION 2 but almost there ====
// import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';

// const navigateFunction = () => navigate('/');
// const getLoggedIn = async () => await getProtected();

// const navigate = useNavigate();
// const getAuth = async () => {
// 	try {
// 		const token = localStorage.getItem('token');
// 		const response = await Axios({
// 			method: 'GET',
// 			url: 'http://localhost:3000/users/protected',
// 			headers: { Authorization: token },
// 			withCredentials: true
// 		});
// 		console.log(response);
// 	} catch (err) {
// 		console.log(err);
// 		navigate('/');
// 	}
// };

// getAuth(); insert in useEffect

// ==== OLD VERION 1 but not working ====
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
// useEffect(() => {
// 	const token = localStorage.getItem('token');
// 	axios
// 		.get('http://localhost:3000/users/protected', {
// 			headers: { Authorization: token }
// 		})
// 		.then((res) => {
// 			console.log(res);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			navigate('/');
// 		});
// }, []);
