import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import shoppingCart from './shoppingCart'
import authReducer from './auth'

const appReducer = combineReducers({
	counter: counterReducer,
	shoppingCart,
	auth: authReducer
})

export default appReducer
