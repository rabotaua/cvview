const refuseTemplatesReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_REFUSE_TEMPLATES':
			return action.refuseTemplates
		case 'SEND_INVITE':
			return state
		case 'SAVE_INVITE_TEMPLATE':
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

export default refuseTemplatesReducer
