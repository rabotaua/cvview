const val = localStorage.getItem('auth')
const isOldAuth = typeof val === 'boolean'
const auth = isOldAuth ? false : (parseInt(val, 10) || 0)

const authReducer = (state = auth, {type, id}) => {
	if (type === 'SIGN_IN') {
		return id
	}

	if (type === 'SIGN_OUT') {
		return 0
	}

	return state
}

export default authReducer
