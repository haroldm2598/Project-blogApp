import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import Article from './Article';
import Recommended from './Recommended';
import Pagination from '../component/Pagination';

// Sort the new one to the top DONE
// Create image at the backend DONE
// mutiple fetch but different page for article and recommended in order to work
// Create pagination saan kinuha yun match DONE
// Optional delete and update the article NO PROGRESS
function Homepage() {
	const params = useParams();
	const pageNumber = params.pageNumber || 1;

	const [page, setPage] = useState(pageNumber);
	const [pages, setPages] = useState(1);
	const { data } = useFetch(`http://localhost:3000/blog/article/?page=${page}`);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				setPages(data.pages);
			} catch (err) {
				console.log(err);
			}
		};

		fetchPost();
	}, [page]);

	return (
		<div className='w-full px-32 py-4'>
			{typeof data.blog === 'undefined' ? (
				<p>Loading ....</p>
			) : (
				<div className='max-w-5xl mx-auto flex flex-row gap-14'>
					<div className='w-[70%]'>
						<h1 className='mb-4 text-center font-bold text-2xl'>Articles</h1>
						{data?.blog.map((item, index) => (
							<Fragment key={index}>
								<Article
									title={item.title}
									description={item.description}
									authorName={item.authorName.name}
									image={item?.image}
								/>
							</Fragment>
						))}
					</div>

					<div className='w-[40%]'>
						<h1 className='mb-4 text-center font-semibold text-xl'>
							Recommended Articles
						</h1>
						<Recommended />
					</div>
				</div>
			)}

			<Pagination page={page} pages={pages} setPage={setPage} />
		</div>
	);
}

export default Homepage;

// const [page, setPage] = useState(0);
// const [pageCount, setPageCount] = useState(1);

/* <Pagination
				page={page}
				pageCount={pageCount}
				setPage={setPage}
				setPageCount={setPageCount}
			/> */
