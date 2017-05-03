const notificationsReducer = (state = [], {type, message, id}) => {
	switch (type) {
		case 'NOTIFY_SUCCESS':
			return [...state, {message, id, type: 'success'}]
		// case 'NOTIFY_ERROR': return [...state, {message, type: 'error', id: Date.now()}]
		case 'NOTIFY_CLOSE':
			return state.filter(n => n.id !== id)
		default:
			return state
	}
}

export default notificationsReducer
