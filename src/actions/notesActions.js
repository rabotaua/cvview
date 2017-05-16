import {addNewNoteApi, getResumeNotes} from '../api/notesApi'
import * as actions from '../actions/actionConst'

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
				const uid = Date.now()

				if (responseStatus) {
					dispatch({
						uid,
						type: actions.NOTES_SUCCESS_NOTIFICATION,
						message: 'Your note has been successfully added !',
						level: 'success'
					})
				} else {
					dispatch({
						uid,
						type: actions.NOTES_FAIL_NOTIFICATION,
						message: 'Adding the notes has been failed',
						level: 'success'
					})
				}
				setTimeout(() => {
					dispatch({
						uid,
						type: actions.REMOVE_NOTIFICATION
					})
				}, 5000)
			}, ~~(Math.random() * 2500))
		}
	)
}
