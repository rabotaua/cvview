export const signIn = () => {
	const id = 966
	try {
		localStorage.setItem('auth', id)
	}
	catch(e) {
		console.log(e)
	}

	return {
		type: 'SIGN_IN',
		id
	}
}

export const signOut = () => {
	try {
		localStorage.removeItem('auth')
	}
	catch(e) {
		console.log(e)
	}

	return {
		type: 'SIGN_OUT'
	}
}
