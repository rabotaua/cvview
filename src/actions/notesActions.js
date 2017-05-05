import { addNewNoteApi, getResumeNotes } from '../api/notesApi'

export const getNotesList = resumeId => dispatch => {
	getResumeNotes(resumeId).then(notes => {
		dispatch({
			type: 'GET_NOTES_LIST',
			notes: notes.reverse()
		})
	})
}

export const addNewNote = (text, id) => dispatch => {

	const body = {
		text,
		privateType: true,
		resumeId: id,
		createDate: (new Date()).toJSON()
	}

	const clientId = Date.now()
	dispatch({
		type: 'ADD_NEW_NOTE',
		id: Date.now(),
		clientId,
		apiStatus: null,
		...body
	})

	addNewNoteApi(body).then(response => {
		const responseStatus = (response.status >= 200 && response.status < 400)

		setTimeout(() => {
			dispatch({
				type: 'CHANGE_NOTE_STATUS',
				id: clientId,
				apiStatus: responseStatus
			})
		}, ~~(Math.random() * 2500))
	})
}
