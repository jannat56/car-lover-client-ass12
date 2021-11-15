import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	getIdToken,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();
	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setUser(result.user);
			})
			.finally(() => setIsLoading(false));
	};

	//    email register
	const registerUsingEmail = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				// setUser(res.user);
				const newUser = res.user;
				const { email } = newUser;
				// setUser(newUser);
				// save user to the database
				saveUser(email, 'POST');
				console.log('signup');
			})
			.catch((error) => setError(error.message));
	};

	const loginUsingEmail = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				// setUser(res.user);
				console.log('signin');
			})
			.catch((error) => setError(error.message));
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	// observer user state
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	useEffect(() => {
		fetch(`https://nameless-stream-92259.herokuapp.com/users/${user.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user.email]);

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {})
			.finally(() => setIsLoading(false));
	};

	const saveUser = (email, method) => {
		const user = { email };
		fetch('https://nameless-stream-92259.herokuapp.com/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then();
	};
	return {
		user,
		admin,
		token,
		isLoading,
		signInUsingGoogle,
		registerUsingEmail,
		loginUsingEmail,

		error,
		logOut,
	};
};

export default useFirebase;
