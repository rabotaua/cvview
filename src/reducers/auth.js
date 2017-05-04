const authReducer = (state = 0, {type, id}) => {
	if (type === 'SIGN_IN') {
		return id
	}

	if (type === 'SIGN_OUT') {
		return 0
	}

	return state
}

export default authReducer
