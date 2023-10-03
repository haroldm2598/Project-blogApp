// import articleImg from '../assets/images/homepage.jpg';
function Article({ title, description, authorName, image }) {
	const truncate = (source, size) => {
		return source.length > size ? source.slice(0, size - 1) + '...' : source;
	};
	return (
		<div className='w-full lg:w-[100%]'>
			<div className='card lg:card-side bg-base-100 shadow-xl mb-8'>
				<div className='card-body w-[80%]'>
					<h2 className='card-title'>{title}</h2>
					<p>{truncate(description, 150)}</p>
					<div className='flex flex-row'>
						<p>{authorName}</p>
						<p>Sept 22, 2023</p>
					</div>
				</div>

				<figure className='w-[20%]'>
					<img
						className='w-full h-auto object-cover'
						src={`http://localhost:3000/` + image}
						alt='Album'
					/>
				</figure>
			</div>
		</div>
	);
}

export default Article;
