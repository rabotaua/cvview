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

export const notifySuccess = message => dispatch => notify(dispatch, 'NOTIFY_SUCCESS', message)
export const notifyError = message => dispatch => notify(dispatch, 'NOTIFY_ERROR', message)
