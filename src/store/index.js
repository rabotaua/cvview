import { applyMiddleware, createStore } from 'redux'
import appReducer from '../reducers/index.js'
import thunk from 'redux-thunk'

const appStore = createStore(
	appReducer,
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default appStore
