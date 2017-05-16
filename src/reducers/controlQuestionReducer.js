const controlQuestionsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_CONTROL_QUESTIONS':
			return action.resume.controlQuestions
		default:
			return state
	}
}

export default controlQuestionsReducer
