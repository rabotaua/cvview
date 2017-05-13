

export const likeResumeAction = resumeId=> dispatch => {
	dispatch({
		type: 'LIKE_RESUME',
		resumeId
	})
}

export const dislikeResumeAction = resumeId=> dispatch => {
	dispatch({
		type: 'DISLIKE_RESUME',
		resumeId
	})
}

export const toggleLikeResumeAction = resumeId=> dispatch => {
	dispatch({
		type: 'TOGGLE_LIKE_RESUME',
		resumeId
	})
}
