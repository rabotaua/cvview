import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import shoppingCart from './shoppingCart'
import authReducer from './auth'
import resumeReducer from './resumeReducer'
import notesReducer from './notesReducer'
import notifyReducer from './notificationsReducer'
import similarReducer from './similarReducer'
import citiesDictionaryReducer from './citiesDictionaryReducer'
import vacanciesDictionaryReducer from './vacanciesDictionaryReducer'
import inviteTemplatesReducer from './inviteTemplatesReducer'
import selectedInviteTemplateReducer from './selectedInviteTemplateReducer'
import checkInviteTemplateReducer from './checkInviteTemplateReducer'

const appReducer = combineReducers({
	counter: counterReducer,
	shoppingCart,
	auth: authReducer,
	resume: resumeReducer,
	notes: notesReducer,
	notifications: notifyReducer,
	similar: similarReducer,
	citiesDictionary: citiesDictionaryReducer,
	vacanciesDictionary: vacanciesDictionaryReducer,
	notifications: notifyReducer,
	inviteTemplates: inviteTemplatesReducer,
	selectedInviteTemplate: selectedInviteTemplateReducer,
	isInviteTemplateToSaveChecked: checkInviteTemplateReducer
})

export default appReducer
