import { getVacanciesDictionaryAction } from './dictionaryActions'

export const signIn = () => dispatch => {
	let id = 966
	try {
		localStorage.setItem('auth', id)
		dispatch(getVacanciesDictionaryAction(id))
	}
	catch(e) {
		console.log(e)
	}

	dispatch({
		type: 'SIGN_IN',
		id
	})
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
