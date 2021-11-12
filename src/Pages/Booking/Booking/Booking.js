import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import useFirebase from '../../../hooks/useFirebase';

const Booking = () => {
	// const { register, handleSubmit, reset } = useForm();
	const { serviceId } = useParams();
	const [service, setService] = useState({});
	const { user } = useFirebase();

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		data.user_id = user.uid;
		console.log(data);
		axios
			.post('https://nameless-stream-92259.herokuapp.com/orders', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('ordered successfully');
					reset();
				}
			});
	};

	useEffect(() => {
		fetch(
			`https://nameless-stream-92259.herokuapp.com/services/${serviceId}`
		)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	return (
		<div>
			<h2>Booking: {service.name}</h2>
			<p>{service.description}</p>
			<h2>$ {service.Amount}</h2>
			{/* <h3>{serviceId}</h3> */}
			<img
				style={{ height: '300px', width: '300px' }}
				alt='service'
				src={service.img}
			></img>
			<form
				className='mt-4 bg-dark p-4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<input {...register('name')} placeholder='name' />
				<br />
				<br />
				<input
					type='number'
					{...register('phone')}
					placeholder='Phone Number'
				/>
				<br />
				<br />
				<input
					type='email'
					{...register('email')}
					placeholder='email'
				/>
				<br />
				<br />
				<input className='btn btn-info' type='submit' />
			</form>
		</div>
	);
};

export default Booking;
