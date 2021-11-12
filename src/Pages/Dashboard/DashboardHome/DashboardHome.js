import { Typography } from '@mui/material';
import React from 'react';
import Bookings from '../Bookings/Bookings';

const DashboardHome = () => {
	return (
		<div>
			<Typography paragraph>
				<Bookings></Bookings>
			</Typography>
		</div>
	);
};

export default DashboardHome;
