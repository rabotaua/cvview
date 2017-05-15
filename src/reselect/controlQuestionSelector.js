import {createSelector} from 'reselect'

export const controlQuestionSelector = createSelector(
	state => state.controlQuestions,
	controlQuestions => {
		const total = controlQuestions.length
		const answeredQuestions = controlQuestions.filter(question => question.isAnswered).length
		const percentage = Math.round(answeredQuestions * 100 / total)
		return percentage
	}
)
