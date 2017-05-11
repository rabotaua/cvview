const selectedInviteTemplateReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_INVITE_TEMPLATE':
			return action.template
		case 'SELECT_INVITE_TEMPLATE_CHANGE_TEXT':
			return {...state, text: action.text}
		default:
			return state
	}
}

export default selectedInviteTemplateReducer
