import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import shoppingCart from './shoppingCart'
import authReducer from './auth'
import resumeReducer from './resumeReducer'
import notesReducer from './notesReducer'
import notifyReducer from './notificationsReducer'
import inviteTemplatesReducer from './inviteTemplatesReducer'
import selectedInviteTemplateReducer from './selectedInviteTemplateReducer'

const appReducer = combineReducers({
	counter: counterReducer,
	shoppingCart,
	auth: authReducer,
	resume: resumeReducer,
	notes: notesReducer,
	notifications: notifyReducer,
	inviteTemplates: inviteTemplatesReducer,
	selectedInviteTemplate: selectedInviteTemplateReducer
})

export default appReducer
