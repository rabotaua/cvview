import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import shoppingCart from './shoppingCart'
import authReducer from './authReducer'
import resumeReducer from './resumeReducer'
import notesReducer from './notesReducer'
import notifyReducer from './notificationsReducer'
import similarReducer from './similarReducer'
import citiesDictionaryReducer from './citiesDictionaryReducer'
import vacanciesDictionaryReducer from './vacanciesDictionaryReducer'
import branchesDictionaryReducer from './branchesDictionaryReducer'
import inviteTemplatesReducer from './InviteReducers/inviteTemplatesReducer'
import selectedInviteTemplateReducer from './InviteReducers/selectedInviteTemplateReducer'
import checkInviteTemplateReducer from './checkInviteTemplateReducer'
import userDataReducer from './userDataReducer'
import inviteDialogReducer from './InviteReducers/inviteDialogReducer'
import refuseTemplateReducer from './RefuseReducers/refuseTemplateReducer'

const appReducer = combineReducers({
	counter: counterReducer,
	shoppingCart,
	auth: authReducer,
	resume: resumeReducer,
	notes: notesReducer,
	notifications: notifyReducer,
	similar: similarReducer,
	citiesDictionary: citiesDictionaryReducer,
	branchesDictionary: branchesDictionaryReducer,
	vacanciesDictionary: vacanciesDictionaryReducer,
	inviteTemplates: inviteTemplatesReducer,
	userData: userDataReducer,
	selectedInviteTemplate: selectedInviteTemplateReducer,
	isInviteTemplateToSaveChecked: checkInviteTemplateReducer,
	isInviteDialogOpen: inviteDialogReducer,
	refuseTemplates: refuseTemplateReducer

})

export default appReducer
