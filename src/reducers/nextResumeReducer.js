const nextResumeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_NEXT_RESUME':
			return action.nextResume
		default:
			return state
	}
}

export default nextResumeReducer
