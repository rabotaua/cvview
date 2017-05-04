const similarReducer = (state = [], {type, resumes}) => {
	switch (type) {
		case 'GET_SIMILAR_RESUMES_SUCCESS':
			return resumes
		default:
			return state
	}
}

export default similarReducer
