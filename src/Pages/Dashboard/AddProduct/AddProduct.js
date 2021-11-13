import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios
			.post('https://nameless-stream-92259.herokuapp.com/services', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('added successfully');
					reset();
				}
			});
	};
	return (
		<div className='add-service'>
			<h2 className='bg-info p-4 text-dark'>Add Product</h2>
			<form className='bg-light p-4' onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', { required: true, maxLength: 20 })}
					placeholder='name'
				/>
				<input
					type='number'
					{...register('Amount')}
					placeholder='Amount'
				/>
				<textarea
					{...register('description')}
					placeholder='description'
				/>
				<input {...register('img')} placeholder='img-url' />

				<input className='bg-danger text-light' type='submit' />
			</form>
		</div>
	);
};

export default AddProduct;
