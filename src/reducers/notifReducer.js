import * as actions from '../actions/actionConst'

const notifReducer = (state = [], action) => {

	switch (action.type) {
		case actions.NOTES_SUCCESS_NOTIFICATION:
		case actions.CONTACTS_SUCCESS_NOTIFICATION:
			return [...state, action]
		case actions.NOTES_FAIL_NOTIFICATION:
		case actions.CONTACTS_FAIL_NOTIFICATION:
			return [...state, action]
		case actions.REMOVE_NOTIFICATION:
			return state.filter(notif => notif.uid !== action.uid)
		default:
			return state
	}
}

export default notifReducer
