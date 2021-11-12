import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const element = <FontAwesomeIcon icon={faCar} />;
	const { user, logOut } = useFirebase();
	return (
		<>
			<Navbar
				bg='dark'
				variant='dark'
				sticky='top'
				collapseOnSelect
				expand='lg'
			>
				<Container>
					<Navbar.Brand href='#home'>
						Car Lovers {element}
					</Navbar.Brand>
					<br />
					<button className='btn btn-light'>
						<Link to='/explore'>Explore</Link>
					</button>

					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Nav.Link as={HashLink} to='/home#home'>
							Home
						</Nav.Link>
						<Nav.Link as={HashLink} to='/home#about'>
							about
						</Nav.Link>
						<Nav.Link as={HashLink} to='/home#services'>
							Services
						</Nav.Link>
						{/* <Nav.Link as={HashLink} to='/home#facilities'>
							Facilities
						</Nav.Link> */}
						<div>
							{user.email && (
								<span className=''>
									{/* <Link to='/addServices'>Add Service</Link>
									<br /> */}
									{/* <Link to='/manageOrders'>
										Manage Orders
									</Link>
									<br /> */}
									{/* <Link to='/myOrders'>My Orders</Link>
									<br /> */}
									<Link to='/dashboard'>Dashboard</Link>
								</span>
							)}
						</div>
						{user?.email ? (
							<Button onClick={logOut} variant='light'>
								Logout
							</Button>
						) : (
							<Nav.Link as={Link} to='/login'>
								Login
							</Nav.Link>
						)}
						<Navbar.Text>
							Signed in as:{' '}
							<a href='#login'>{user?.displayName}</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
