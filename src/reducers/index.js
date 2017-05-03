import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

const appReducer = combineReducers({
  counter: counterReducer
})

export default appReducer
