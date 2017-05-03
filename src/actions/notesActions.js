import { getResumeNotes } from '../api/notesApi'

export const getNotesList = resumeId => dispatch => {
	getResumeNotes(resumeId).then(notes => {
		dispatch({
			type: 'GET_NOTES_LIST',
			notes
		})
	})
}
