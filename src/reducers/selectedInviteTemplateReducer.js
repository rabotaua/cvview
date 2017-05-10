const selectedInviteTemplateReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_INVITE_TEMPLATE':
			return action.template
		case 'SELECT_INVITE_TEMPLATE_CHANGE_TEXT':
			console.log(action)
			return {...state, text: action.text}
			debugger
		default:
			return state
	}
}

export default selectedInviteTemplateReducer
