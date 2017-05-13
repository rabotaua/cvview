const likeDislikeResumeReducer = (state = false, action) => {
	switch (action.type) {
		case 'LIKE_RESUME':
			return true
		case 'DISLIKE_RESUME':
			return false
		case 'TOGGLE_LIKE_RESUME':
			return !state
		default:
			return state
	}
}

export default likeDislikeResumeReducer
