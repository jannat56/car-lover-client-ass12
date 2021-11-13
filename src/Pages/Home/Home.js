// import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import React, { useEffect, useState } from 'react';
// import Services from '../Services/Services';
import './Home.css';
// import Services from './Services/Services';
import Service from './Service/Service';

const Home = () => {
	const [services, setService] = useState([]);
	const [sixService, setSixService] = useState([]);
	useEffect(() => {
		fetch('https://nameless-stream-92259.herokuapp.com/services')
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	useEffect(() => {
		if (services) {
			const six = services.filter((service, index) => index < 6);

			setSixService(six);
		}
	}, [services]);
	return (
		<div id='home'>
			<Banner></Banner>
			<div className='bg-color-service mt-4'>
				<h2
					className='mt-4 m-4 p-4 service-bg  text-dark w-80'
					id='services'
				>
					Products
				</h2>
				<h3 className='text-light'>Buy Your Dream Car</h3>
				<div className='service-container'>
					{sixService.map((service) => (
						<Service key={service.id} service={service}></Service>
					))}
				</div>
			</div>
			<About></About>
		</div>
	);
};

export default Home;
