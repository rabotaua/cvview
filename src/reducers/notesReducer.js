const notesReducer = (state = [], action) => {
	if (action.type === 'GET_NOTES_LIST') {
		return action.notes
	}
	if (action.type === 'ADD_NEW_NOTE') {
		const { text, id, privateType, createDate, apiStatus } = action
		return [{ text, id, privateType, createDate, apiStatus }, ...state]
	}
	if (action.type === 'CHANGE_NOTE_STATUS') {
		return state.map(n => {
			if (n.id === action.id) {
				n.apiStatus = action.apiStatus
			}
			return n
		})
	}
	return state
}

export default notesReducer
