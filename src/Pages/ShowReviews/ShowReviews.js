import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';

const ShowReviews = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch('https://nameless-stream-92259.herokuapp.com/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<div className='bg-color-service mt-4 p-4'>
			<h2
				className='mt-4 p-4 m-4 service-bg bg-info text-dark w-80'
				id='services'
			>
				Our Review
			</h2>
			<h3 className='text-primary'>This is our Review section</h3>
			<div className='service-container'>
				{reviews &&
					reviews.map((review) => (
						<div key={review._id} service={review}>
							<p className='text-light'>{review.comment}</p>
							<Rating value={review.rating} readOnly />
						</div>
					))}
			</div>
		</div>
	);
};

export default ShowReviews;
