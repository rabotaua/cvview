export const signIn = () => {
	try {
		localStorage.setItem('auth', true)
	}
	catch(e) {
		console.log(e)
	}

	return {
		type: 'SIGN_IN'
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