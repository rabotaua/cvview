const auth = localStorage.getItem('auth') || false

const authReducer = (state = auth, action) => {
	if (action.type === 'SIGN_IN') {
		return true
	}

	if (action.type === 'SIGN_OUT') {
		return false
	}

	return state
}

export default authReducer