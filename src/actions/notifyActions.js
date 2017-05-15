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

	// notify(dispatch, 'NOTIFY_SUCCESS', message)
	dispatch({
		uid,
		type: actions.VACANCY_SUCCESS_NOTIFICATION,
		message: 'You have been successfully sent the vacancy !',
		level: 'success'
	})
	setTimeout(() => {
			dispatch({
				uid,
				type: actions.REMOVE_NOTIFICATION
			})
		}, 5000)
}
export const notifyError = message => dispatch => {
	const uid = Date.now()
	notify(dispatch, 'NOTIFY_ERROR', message)
	dispatch({
		uid,
		type: actions.VACANCY_FAIL_NOTIFICATION,
		message: 'You\'ve got an error sending the vacancy !',
		level: 'success'
	})
	setTimeout(() => {
			dispatch({
				uid,
				type: actions.REMOVE_NOTIFICATION
			})
		}, 5000)
}
