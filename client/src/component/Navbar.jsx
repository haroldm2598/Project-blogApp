import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProtectedContext } from '../context/ProtectedContext';
import Button from './Button';
import Login from './auth/Login';
import Register from './auth/Register';
import Logout from './auth/Logout';

function Navbar() {
	const { loggedIn } = useContext(ProtectedContext);

	return (
		<header className='boxShadow px-32 py-5'>
			<nav className='flex flex-row justify-between items-center'>
				<NavLink to='/'>
					<h1 className='text-4xl font-bold uppercase'>medium clone</h1>
				</NavLink>

				<ul className='flex flex-row items-center gap-6'>
					{loggedIn === undefined || loggedIn === false ? (
						<>
							<li>
								<Button
									name='Login'
									className='btn btn-neutral'
									handleClick={() => window.loginModal.showModal()}
								/>
							</li>

							<li>
								<Button
									name='Register'
									className='btn btn-outline'
									handleClick={() => window.signupModal.showModal()}
								/>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to='/'>Homepage</NavLink>
							</li>
							<li>
								<NavLink to='/Write'>Add article</NavLink>
							</li>

							<li>
								<Logout />
							</li>
						</>
					)}
				</ul>
			</nav>

			<Login />
			<Register />
		</header>
	);
}

export default Navbar;
