const notesReducer = (state = [], action) => {
	if (action.type === 'GET_NOTES_LIST') {
		return [...state, ...action.notes]
	}
	return state
}

export default notesReducer
