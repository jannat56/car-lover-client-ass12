import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import useFirebase from '../../../hooks/useFirebase';

const ManageOrders = () => {
	const [allOrders, setAllOrders] = useState([]);
	const { user } = useFirebase();
	useEffect(() => {
		if (user.email) {
			fetch('https://tranquil-sierra-50909.herokuapp.com/orders')
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setAllOrders(data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [user]);

	// delete an user
	const handleDeleteOrder = (id) => {
		const proceed = window.confirm('are u sure');
		if (proceed) {
			const url = `https://tranquil-sierra-50909.herokuapp.com/order/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert('delete successfully');
						const remainingUsers = allOrders.filter(
							(order) => order._id !== id
						);
						setAllOrders(remainingUsers);
					}
				});
		}
	};
	return (
		<div>
			<h2>Orders : {allOrders.length}</h2>
			<ul>
				{allOrders &&
					allOrders.map((order) => (
						<li key={order._id}>
							{order.name} :: {order.email} :: phone:{' '}
							{order.phone}
							<Link to={`/users/update/${order._id}`}>
								<button>update</button>
							</Link>
							<button
								onClick={() => handleDeleteOrder(order._id)}
							>
								X
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default ManageOrders;
