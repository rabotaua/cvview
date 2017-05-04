import { addNewNoteApi, getResumeNotes } from '../api/notesApi'

export const getNotesList = resumeId => dispatch => {
	getResumeNotes(resumeId).then(notes => {
		dispatch({
			type: 'GET_NOTES_LIST',
			notes
		})
	})
}

export const addNewNote = text => dispatch => {

	const body = {
		text,
		id: Date.now(),
		privateType: true,
		createDate: (new Date()).toJSON()
	}

	dispatch({
		type: 'ADD_NEW_NOTE',
		apiStatus: null,
		...body
	})

	addNewNoteApi(body).then(response => {
		const responseStatus = (response.status >= 200 && response.status < 400)

		setTimeout(() => {
			dispatch({
				type: 'CHANGE_NOTE_STATUS',
				id: body.id,
				apiStatus: responseStatus
			})
		}, 1000)
	})
}
