const checkRefuseTemplateReducer = (state = false, action) => {
	switch (action.type) {
		case 'CHECK_REFUSE_TEMPLATE':
			return action.isChecked
		default:
			return state
	}
}

export default checkRefuseTemplateReducer
