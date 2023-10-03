import { useState } from 'react';
import Axios from 'axios';
import Button from '../Button';

function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submit = () => {
		Axios({
			method: 'POST',
			data: {
				email: email,
				name: name,
				password: password
			},
			withCredentials: true,
			url: 'http://localhost:3000/users/register'
		})
			.then((user) => console.log(user))
			.catch((err) => console.log(err));
	};

	const handleChange = (e) => {
		e.preventDefault();
	};

	return (
		<dialog id='signupModal' className='modal'>
			<div className='modal-box'>
				<form className='flex flex-col' onSubmit={handleChange}>
					<div className='px-4 py-2 flex flex-col'>
						<label htmlFor='name'>name</label>
						<input
							type='text'
							name='name'
							id='name'
							className='border border-solid border-bgMain rounded-md'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='px-4 py-2 flex flex-col'>
						<label htmlFor='email'>Email address</label>
						<input
							type='text'
							name='email'
							id='email'
							className='border border-solid border-bgMain rounded-md'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='px-4 py-2 flex flex-col'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							className='border border-solid border-bgMain rounded-md'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button
						name='Sign up'
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

export default Register;

// console.log(name, email, password);

{
	/* <div className='mx-4 my-10 w-96 flex flex-col content-center items-center [&>*]:my-2'>
			<input
				className='input input-bordered w-full max-w-xs'
				type='text'
				placeholder='Enter name'
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<input
				className='input input-bordered w-full max-w-xs'
				type='text'
				placeholder='Enter email address'
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<input
				className='input input-bordered w-full max-w-xs'
				type='text'
				placeholder='Enter password'
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>
			<button className='btn btn-secondary' onClick={submit}>
				Register
			</button>
		</div> */
}

// axios
// 	.post('http://localhost:3000/users/register', {
// 		data: { name: name, email: email, password: password },
// 		withCredentials: true
// 	})
// 	.then((user) => console.log(user))
// 	.catch((err) => console.log(err));
