import { useEffect, useContext } from 'react';
import { ProtectedContext } from '../context/ProtectedContext';

import Create from '../component/auth/Create';

function Writepage() {
	const { getProtected } = useContext(ProtectedContext);

	useEffect(() => {
		getProtected();
	}, []);

	return (
		<>
			{getProtected && (
				<div className='w-full px-32 py-10'>
					<h1 className='text-4xl font-bold'>Add your article to the page</h1>
					<Create />
				</div>
			)}
		</>
	);
}

export default Writepage;
