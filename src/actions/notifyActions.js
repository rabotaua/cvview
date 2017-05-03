const NOTIFY_TIMEOUT = 5000

export const notifyClose = id => ({
	type: 'NOTIFY_CLOSE',
	id
})

export const notifySuccess = message => dispatch => {
	const id = Date.now()

	dispatch({type: 'NOTIFY_SUCCESS', id, message})

	setTimeout(() => dispatch(notifyClose(id)), NOTIFY_TIMEOUT)
}
