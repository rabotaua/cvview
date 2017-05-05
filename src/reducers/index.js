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
import userDataReducer from './userDataReducer'

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
	userData: userDataReducer
})

export default appReducer
