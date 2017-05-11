const toggleInviteTemplatesListReducer = (state = false, action) => {
	switch (action.type) {
		case 'SHOW_INVITE_TEMPLATES_LIST':
			return true
		case 'HIDE_INVITE_TEMPLATES_LIST':
			return false
		default:
			return state
	}
}

export default toggleInviteTemplatesListReducer
