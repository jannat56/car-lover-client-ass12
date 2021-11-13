import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import { Button, Drawer, Typography } from '@mui/material';
import { Topic } from '@mui/icons-material';
import DashboardHome from '../DashboardHome/DashboardHome';

import useAuth from './../../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const drawerWidth = 240;

function Dashboard(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	let { path, url } = useRouteMatch();
	// const { admin } = useAuth();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div className='bg-dark'>
			<Toolbar />
			{/* <Divider /> */}
			{/* <Link to='/bookings'>
				<Button color='inherit'>Booking</Button>
			</Link> */}
			<Link to={`${url}`}>
				<Button color='inherit'>Dashboard</Button>
			</Link>

			<Link to={`${url}/makeAdmin`}>
				<Button color='inherit'>Make Admin</Button>
			</Link>
			<Link to={`${url}/addProduct`}>
				<Button color='inherit'>Add Product</Button>
			</Link>
			<Link to={`${url}/myOrders`}>
				<Button color='inherit'>My Orders</Button>
			</Link>
			<Link to={`${url}/manageOrders`}>
				<Button color='inherit'>Manage Orders</Button>
			</Link>
			{/* for admin  */}
			{/* {admin && (
				<Box>
					<Link to={`${url}/makeAdmin`}>
						<Button color='inherit'>Make Admin</Button>
					</Link>
					<Link to={`${url}/addProduct`}>
						<Button color='inherit'>Add Product</Button>
					</Link>
				</Box>
			)} */}
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				{/* <Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Dashboard
					</Typography>
				</Toolbar> */}
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{/* <Typography paragraph>
					<Bookings></Bookings>
				</Typography> */}

				<Switch>
					<Route exact path={path}>
						<DashboardHome></DashboardHome>
					</Route>
					<Route path={`${path}/makeAdmin`}>
						<MakeAdmin></MakeAdmin>
					</Route>
					<Route path={`${path}/addProduct`}>
						<AddProduct></AddProduct>
					</Route>
					<Route path={`${path}/myOrders`}>
						<MyOrders></MyOrders>
					</Route>
					<Route path={`${path}/manageOrders`}>
						<ManageOrders></ManageOrders>
					</Route>
				</Switch>
			</Box>
		</Box>
	);
}

Dashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Dashboard;
