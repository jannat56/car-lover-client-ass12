import React, { useRef } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';

const Review = () => {
	const [value, setValue] = React.useState(0);
	const commentRef = useRef('');

	const handleReview = (e) => {
		const data = { comment: commentRef.current.value, rating: value };
		axios
			.post('https://nameless-stream-92259.herokuapp.com/reviews', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('review done successfully');
				}
			});

		e.preventDefault();
	};
	return (
		<div>
			<h2 className='bg-info p-4 text-dark'>Pleae give a review</h2>
			<form className='bg-light p-4' onSubmit={handleReview}>
				<textarea ref={commentRef} rows='10' cols='40'></textarea>
				<Rating
					name='simple-controlled'
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
				<input className='bg-danger text-light' type='submit'></input>
			</form>
		</div>
	);
};

export default Review;
