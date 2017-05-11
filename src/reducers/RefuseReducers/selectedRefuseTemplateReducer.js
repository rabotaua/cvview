const selectedInviteTemplateReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_REFUSE_TEMPLATE':
			return action.template
		case 'SELECT_REFUSE_TEMPLATE_CHANGE_TEXT':
			console.log(action)
			return {...state, text: action.text}
		default:
			return state
	}
}

export default selectedInviteTemplateReducer
