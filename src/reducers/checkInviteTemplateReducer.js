const checkInviteTemplateReducer = (state = false, action) => {
	switch (action.type) {
		case 'CHECK_INVITE_TEMPLATE':
			return action.isChecked
		default:
			return state
	}
}

export default checkInviteTemplateReducer
