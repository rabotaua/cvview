const toggleRefuseTemplatesListReducer = (state = false, action) => {
	switch (action.type) {
		case 'SHOW_REFUSE_TEMPLATES_LIST':
			return true
		case 'HIDE_REFUSE_TEMPLATES_LIST':
			return false
		default:
			return state
	}
}

export default toggleRefuseTemplatesListReducer
