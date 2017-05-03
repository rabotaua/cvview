import { createStore } from 'redux'
import appReducer from '../reducers/index.js'

const appStore = createStore(appReducer)

export default appStore