const userDataReducer = (state = {}, action) => {
	if (action.type === 'SET_USER_DATA') {
		return { ...action.data[0] }
	}
	if (action.type === 'DECREMENT_UNUSED_COUNT') {
		return { ...state, unusedContacts: state.unusedContacts - 1 }
	}
	return state
}

export default userDataReducer
