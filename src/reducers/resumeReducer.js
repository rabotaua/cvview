const resumeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_RESUME':
			return action.resume
		default:
			return state
	}
}

export default resumeReducer
