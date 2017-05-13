import * as actions from './actionConst'

const NOTIFY_TIMEOUT = 5000

export const notifyClose = id => ({
	type: 'NOTIFY_CLOSE',
	id
})

const notify = (dispatch, type, message) => {
	const id = Date.now()

	dispatch({type, id, message})

	setTimeout(() => dispatch(notifyClose(id)), NOTIFY_TIMEOUT)
}


export const notifySuccess = message => dispatch => {
	const uid = Date.now()

	notify(dispatch, 'NOTIFY_SUCCESS', message)
	dispatch({
		uid,
		type: actions.NOTES_SUCCESS_NOTIFICATION,
		message: 'Your note has been successfully added !',
		level: 'success'
	})
}
export const notifyError = message => dispatch => notify(dispatch, 'NOTIFY_ERROR', message)
