import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';
import axios from 'axios';

import Button from '../Button';

function Create() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const navigate = useNavigate();

	const submit = () => {
		console.log(image);
		const token = localStorage.getItem('token');
		const formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('image', image);
		axios
			.post('http://localhost:3000/blog/create', formData, {
				headers: { Authorization: token }
			})
			.then((user) => console.log(user))
			.catch((err) => console.log(err));
		navigate('/');

		// Axios({
		// 	method: 'POST',
		// 	data: { title: title, description: description },
		// 	withCredentials: true,
		// 	url: 'http://localhost:3000/blog/create',
		// 	headers: { Authorization: token }
		// })
	};

	const handleChange = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form
				className='join mt-2 flex flex-col justify-center items-center [&>*]:mb-10'
				onSubmit={handleChange}
			>
				<input
					multiple
					type='file'
					name='image'
					id='image'
					onChange={(e) => setImage(e.target.files[0])}
				/>
				<input
					type='text'
					name='title'
					id='title'
					placeholder='enter your title'
					className='input input-group border-solid border-2 border-current'
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type='text'
					name='description'
					id='description'
					placeholder='enter your description'
					className='input input-group border-solid border-2 border-current'
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button
					name='submit'
					className='btn btn-neutral'
					handleClick={submit}
				/>
			</form>
		</>
	);
}

export default Create;
