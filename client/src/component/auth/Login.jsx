import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Button from '../Button';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const submit = async () => {
		try {
			const user = await Axios({
				method: 'POST',
				data: {
					email: email,
					password: password
				},
				withCredentials: true,
				url: 'http://localhost:3000/users/login'
			});
			localStorage.setItem('token', user.data.token);
			// await getProtected();
			navigate('/Write');
		} catch (err) {
			console.log(err);
			navigate('/');
		}
	};

	const handleChange = async (e) => {
		e.preventDefault();
	};
	return (
		<dialog id='loginModal' className='modal'>
			<div className='modal-box'>
				<form className='flex flex-col' onSubmit={handleChange}>
					<div className='px-4 py-2 flex flex-col'>
						<label htmlFor='email'>Email address</label>
						<input
							type='text'
							name='email'
							id='emailLogin'
							className='border border-solid border-bgMain rounded-md'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='px-4 py-2 flex flex-col'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='passwordLogin'
							className='border border-solid border-bgMain rounded-md'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button
						name='log in'
						className='m-4 btn btn-neutral'
						handleClick={submit}
					/>
				</form>
			</div>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	);
}

export default Login;

// axios
// 	.post('http://localhost:3000/users/login', { email, password })
// 	.then((user) => {
// 		console.log(user);
// 		localStorage.setItem('token', user.data.token);
// 		navigate('/homepage');
// 	})
// 	.catch((err) => console.log(err));

// <div className='mx-4 my-10 w-96 flex flex-col content-center items-center [&>*]:my-2'>
// 			<input
// 				className='input input-bordered w-full max-w-xs'
// 				type='text'
// 				placeholder='Enter email address'
// 				value={email}
// 				onChange={(event) => setEmail(event.target.value)}
// 			/>
// 			<input
// 				className='input input-bordered w-full max-w-xs'
// 				type='text'
// 				placeholder='Enter password'
// 				value={password}
// 				onChange={(event) => setPassword(event.target.value)}
// 			/>
// 			<button className='btn btn-primary' onClick={submit}>
// 				Login
// 			</button>
// 		</div>
