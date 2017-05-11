const refuseDialogReducer = (state = false, action) => {
	switch (action.type) {
		case 'OPEN_REFUSE_DIALOG':
			return true
		case 'CLOSE_REFUSE_DIALOG':
			return false
		default:
			return state
	}
}

export default refuseDialogReducer
