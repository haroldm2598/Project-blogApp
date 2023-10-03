import Button from './Button';

function Pagination({ page, pageCount, setPage }) {
	const handlePrevious = () => {
		setPage((p) => {
			if (p === 0) return p;
			return p - 1;
		});
	};

	const handleNext = () => {
		setPage((p) => {
			return p + 1;
		});
	};

	return (
		<footer className='w-full flex flex-row justify-center'>
			<Button
				name='Previous'
				className='m-4 btn btn-neutral'
				disabled={page === 0}
				handleClick={handlePrevious}
			/>
			<Button
				name='Next'
				className='m-4 btn btn-neutral'
				disabled={page === pageCount}
				handleClick={handleNext}
			/>
		</footer>
	);
}

export default Pagination;
