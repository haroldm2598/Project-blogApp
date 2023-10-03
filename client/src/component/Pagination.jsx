import Button from './Button';

function Pagination({ page, pages, setPage }) {
	let middlePaginations;

	if (pages <= 5) {
		middlePaginations = [...Array(pages)].map((_, index) => (
			<Button
				key={index + 1}
				name={index + 1}
				className='m-4 btn btn-neutral'
				handleClick={() => setPage(index + 1)}
				disabled={page === index + 1}
			/>
		));
	} else {
		const startValue = Math.floor((page - 1) / 5) * 5;

		middlePaginations = (
			<>
				{[...Array(5)].map((_, idx) => (
					<Button
						key={startValue + idx + 1}
						name={startValue + idx + 1}
						className='m-4 btn btn-neutral'
						disabled={page === startValue + idx + 1}
						handleClick={() => setPage(startValue + idx + 1)}
					/>
				))}

				<Button name='...' className='m-4 btn btn-neutral' />
				<Button
					name={pages}
					className='m-4 btn btn-neutral'
					handleClick={() => setPage(pages)}
				/>
			</>
		);
	}

	const handlePrevious = () => {
		setPage((p) => p - 1);
	};

	const handleNext = () => {
		setPage((p) => p + 1);
	};

	return (
		<footer className='w-full flex flex-row justify-center'>
			<Button
				name='&#171;'
				className='m-4 btn btn-neutral'
				disabled={page === 1}
				handleClick={handlePrevious}
			/>
			{middlePaginations}
			<Button
				name='&#187;'
				className='m-4 btn btn-neutral'
				disabled={page === pages}
				handleClick={handleNext}
			/>
		</footer>
	);
}

export default Pagination;
