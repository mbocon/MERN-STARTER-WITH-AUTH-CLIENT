import { useState, useEffect } from 'react';
import './App.css';

import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage  from './pages/HomePage/HomePage';

import { Route, Switch } from 'react-router-dom';

import { getUser, logout } from './services/userService';

function App(props) {
	/* local variables */

	/* hooks */

	const [userState, setUserState] = useState({ user: getUser() });

	useEffect(() => {
    // do something
	}, []);

	/* user-related helper functions */

	function handleLogout() {
		logout();
		setUserState({ user: null });
	}

	function handleSignupOrLogin() {
		setUserState({ user: getUser() });
	}

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' render={() => <HomePage user={userState.user} handleLogout={handleLogout} />} />
				<Route exact path='/signup' render={props => <SignupPage {...props} handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route exact path='/login' render={props => <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin} />} />
			</Switch>
		</div>
	);
}

export default App;
