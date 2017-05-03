import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import shoppingCart from './shoppingCart'

const appReducer = combineReducers({
	counter: counterReducer,
	shoppingCart
})

export default appReducer
