import { createStore } from 'redux'
import appReducer from '../reducers/index.js'

const appStore = createStore(
	appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default appStore