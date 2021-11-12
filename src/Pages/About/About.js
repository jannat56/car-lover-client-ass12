import React from 'react';
import picture from '../../../src/images/about/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const About = () => {
	const element = <FontAwesomeIcon icon={faCar} />;
	// const element2 = <FontAwesomeIcon icon={faTicketAlt} />;
	const element3 = <FontAwesomeIcon icon={faDollarSign} />;
	return (
		<div className='container row p-4 d-flex align-items-center' id='about'>
			<div className='col-lg-10'>
				<h3 className='bg-dark p-4 text-white'>About Us</h3>
				<h3> Car services {element}</h3>
				<p>
					Find Car Service In Usa. Unlimited Access. 100% Secure.
					Always Facts. Privacy Friendly. The Best Resources. Results
					and Answers. Types: Best Results, Explore Now, New Sources,
					Best in Search.
				</p>
				<h3> Buy Car {element} </h3>
				<p>
					We're your one-stop shop for buying and selling your car.
					Get matched to your perfect car, or sell one swiftly
				</p>
				<h3> Discount {element3}</h3>
				<p>
					Save up to 25% off online Budget rental rates when you
					enroll in Veterans Advantage. Family members can also enjoy
					these military discount car rental deals.
				</p>
			</div>
			<div className='col-lg-2'>
				<img src={picture} className='' alt='' />
			</div>
		</div>
	);
};

export default About;
