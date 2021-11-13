import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
	const { _id, name, Amount, description, img } = service;
	return (
		<div className='service pb-4'>
			<img
				style={{ height: '300px', width: '300px', padding: '20px' }}
				src={img}
			/>
			<div className='pt-4'>
				<h5 className='text-light'>Product Title: {name}</h5>
				<h5 className='text-light'>Amount: $ {Amount}</h5>
				<p className='text-light'>description: {description}</p>
			</div>
			<Link to={`/booking/${_id}`}>
				<button className='btn btn-danger'>
					book {name.toLowerCase()}
				</button>
			</Link>
		</div>
	);
};

export default Service;
