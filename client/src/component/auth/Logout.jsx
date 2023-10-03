import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProtectedContext } from '../../context/ProtectedContext';

function Logout() {
	const { setLoggedIn } = useContext(ProtectedContext);
	const navigate = useNavigate();
	const logout = async () => {
		localStorage.removeItem('token');
		setLoggedIn(undefined);
		navigate('/');
	};
	return (
		<>
			<button onClick={logout}>Logout</button>
		</>
	);
}

export default Logout;
