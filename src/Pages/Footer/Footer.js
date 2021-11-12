import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
	const element = <FontAwesomeIcon icon={faCar} />;

	return (
		<section>
			<div className='mt-4 footer text-white p-4'>
				<h5>BestCar Store || Dream True || Car Lovers</h5>
				<p>Home | About | Services | Facilities | Login | Orders</p>
				<p>copyright@2021 | Car Lovers {element}</p>
			</div>
		</section>
	);
};

export default Footer;
