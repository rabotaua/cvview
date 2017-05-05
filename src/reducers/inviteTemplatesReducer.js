
const inviteTemplatesReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_TEMPLATES':
			return action.inviteTemplates
		case 'EDIT_INVITE_TEMPLATE':
			let newState = state.map(template => {
				if (template.id === action.template.id) {
					return Object.assign({}, template, action.template)
				} else {
					return template
				}
			})
			return newState
		default:
			return state
	}
}

export default inviteTemplatesReducer
