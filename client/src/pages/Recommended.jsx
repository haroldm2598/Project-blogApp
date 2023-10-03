import { Fragment } from 'react';
import { useFetch } from '../hooks/useFetch';

function Recommended() {
	const { data } = useFetch('http://localhost:3000/blog/recommended/?page=0');

	const fetchReco = () => {
		return data?.blog.map((item, index) => (
			<Fragment key={index}>
				<div className='w-full lg:w-[100%]'>
					<div className='card lg:card-side bg-base-100 shadow-xl mb-8'>
						<div className='card-body w-[80%]'>
							<h2 className='card-title'>{item.title}</h2>
							<div className='flex flex-row'>
								<p>{item.authorName.name}</p>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		));
	};

	return (
		<>{typeof data.blog === 'undefined' ? <p>Loading...</p> : fetchReco()}</>
	);
}

export default Recommended;
