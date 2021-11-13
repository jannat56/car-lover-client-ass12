import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Bookings = () => {
	const { user } = useAuth();
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const url = `https://nameless-stream-92259.herokuapp.com/orders`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setBookings(data));
	}, []);
	return (
		<div className='bg-info text-dark p-4'>
			<h2>Bookings: {bookings.length}</h2>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='right'>Phone</TableCell>
							<TableCell align='right'>Email</TableCell>
							{/* <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
							<TableCell align='right'>
								Protein&nbsp;(g)
							</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{bookings.map((row) => (
							<TableRow
								key={row._id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.phone}</TableCell>
								<TableCell align='right'>{row.email}</TableCell>
								{/* <TableCell align='right'>{row.carbs}</TableCell>
								<TableCell align='right'>
									{row.protein}
								</TableCell> */}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Bookings;
