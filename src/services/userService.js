import { setToken, getUserFromToken, removeToken } from './tokenService';

const BASE_URL = 'http://localhost:3001/api/users/';

function signup(user) {
	return fetch(BASE_URL + 'signup', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(user),
	})
		.then(res => {
			if (res.ok) return res.json();
			// Probably a duplicate email
			throw new Error('Email already taken!');
		})
		.then(({ token }) => setToken(token));
}

function login(creds) {
	return fetch(BASE_URL + 'login', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(creds),
	})
		.then(res => {
			if (res.ok) return res.json();
			// Probably a duplicate email
			throw new Error('Email already taken!');
		})
		.then(({ token }) => setToken(token));
}

function getUser() {
	return getUserFromToken();
}

function logout() {
	removeToken();
}

export { signup, getUser, logout, login };
