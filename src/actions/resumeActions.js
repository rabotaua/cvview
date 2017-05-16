import { getResume } from '../api/resumeApi'
import { getSimilarResumesAction } from './similarActions'
import { getNotesList } from './notesActions'

export const getNextResumeAction = id => dispatch => {
	getResume(id).then(resume => {
		dispatch({
			type: 'GET_NEXT_RESUME',
			nextResume: resume
		})
	})
}

export const getResumeText = id => dispatch => {
	getResume(id).then(resume => {
		dispatch({
			type: 'GET_RESUME',
			resume
		})
		dispatch({
			type: 'GET_CONTROL_QUESTIONS',
			resume
		})
		dispatch(getNotesList(resume.id))
		dispatch(getSimilarResumesAction(resume.id))
		dispatch(getNextResumeAction(resume.nextID))
	})
}



