import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
	const location = useLocation();
	const { signInUsingGoogle } = useAuth();
	const { loginUsingEmail } = useAuth();

	return (
		<div className='' id='login'>
			<h1 className='p-4 expert-card text-primary'>Please Login</h1>
			<h4 className='text-primary'>
				You have to login first and then You can choose any Product to
				Order. So login first. We Provide Best Produts.
			</h4>
			<Form className=' form bg-light padding-form '>
				<Form.Group
					as={Row}
					className='mb-3'
					controlId='formPlaintextEmail'
				>
					<Form.Label column sm='2'>
						email
					</Form.Label>
					<Col sm='10'>
						<Form.Control type='email' placeholder='email' />
					</Col>
				</Form.Group>

				<Form.Group
					as={Row}
					className='mb-3'
					controlId='formPlaintextPassword'
				>
					<Form.Label column sm='2'>
						Password
					</Form.Label>
					<Col sm='10'>
						<Form.Control type='password' placeholder='Password' />
					</Col>
				</Form.Group>
				<Button onClick={loginUsingEmail} className='btn btn-info mb-2'>
					Login In
				</Button>
				<br />
				<Button onClick={signInUsingGoogle} className='btn btn-info'>
					Google Sign In
				</Button>
				<h3>OR</h3>
				<Link to='/register'>
					<button className='btn btn-danger'>Register</button>
				</Link>
			</Form>
		</div>
	);
};

export default Login;
