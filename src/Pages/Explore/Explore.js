// import React from 'react';
import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Explore.css';

const Explore = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('https://nameless-stream-92259.herokuapp.com/services')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div className='bg-color-service mt-4'>
			<h2
				className='mt-4 p-4 m-4 service-bg text-dark w-80'
				id='services'
			>
				Products
			</h2>
			<h3 className='text-light'>Buy Your Dream Car</h3>
			<div className='service-container'>
				{services.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default Explore;
