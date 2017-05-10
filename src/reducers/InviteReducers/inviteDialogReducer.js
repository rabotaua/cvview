const inviteDialogReducer = (state = false, action) => {
	switch (action.type) {
		case 'OPEN_INVITE_DIALOG':
			return true
		case 'CLOSE_INVITE_DIALOG':
			return false
		default:
			return state
	}
}

export default inviteDialogReducer
