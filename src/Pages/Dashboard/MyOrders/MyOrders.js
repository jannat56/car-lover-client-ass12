import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import useFirebase from '../../../hooks/useFirebase';

const MyOrders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useFirebase();
	useEffect(() => {
		console.log(user);
		if (user.email) {
			fetch(
				`https://nameless-stream-92259.herokuapp.com/order/${user.uid}`
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setOrders(data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [user]);

	// delete an user
	const handleDeleteUser = (id) => {
		const proceed = window.confirm('are u sure');
		if (proceed) {
			const url = `https://nameless-stream-92259.herokuapp.com/order/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert('delete successfully');
						const remainingUsers = orders.filter(
							(user) => user._id !== id
						);
						setOrders(remainingUsers);
					}
				});
		}
	};
	return (
		<div>
			<h2>My Orders : {orders.length}</h2>
			<ul>
				{orders &&
					orders.map((order) => (
						<li key={order._id}>
							{order.name} :: {order.email} :: phone:{' '}
							{order.phone}
							<Link to={`/users/update/${order._id}`}>
								<button>update</button>
							</Link>
							<button onClick={() => handleDeleteUser(order._id)}>
								X
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default MyOrders;
