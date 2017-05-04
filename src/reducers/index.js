import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import shoppingCart from './shoppingCart'
import authReducer from './auth'
import resumeReducer from './resumeReducer'
import notesReducer from './notesReducer'
import notifyReducer from './notificationsReducer'
import similarReducer from './similarReducer'
import citiesDictionaryReducer from './citiesDictionaryReducer'

const appReducer = combineReducers({
	counter: counterReducer,
	shoppingCart,
	auth: authReducer,
	resume: resumeReducer,
	notes: notesReducer,
	notifications: notifyReducer,
	similar: similarReducer,
	citiesDictionary: citiesDictionaryReducer
})

export default appReducer
