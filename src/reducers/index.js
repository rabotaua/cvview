import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import shoppingCart from './shoppingCart'
import authReducer from './auth'
import resumeReducer from './resumeReducer'
import notesReducer from './notesReducer'
import notifyReducer from './notificationsReducer'

const appReducer = combineReducers({
	counter: counterReducer,
	shoppingCart,
	auth: authReducer,
	resume: resumeReducer,
	notes: notesReducer,
	notifications: notifyReducer
})

export default appReducer
