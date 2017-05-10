import { applyMiddleware, createStore } from 'redux'
import appReducer from '../reducers/index.js'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import gaMiddleware from '../middlewares/gaMiddleware'


const appStore = createStore(
	appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(
		thunk,
		promiseMiddleware(),
		gaMiddleware
	)
)

if (module.hot) window.store = appStore

export default appStore
