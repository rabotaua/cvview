import React, { Component } from 'react'
import { Provider } from 'react-redux'
import appStore from './store'


export default class App extends Component {
    render() {
        return <Provider store={appStore}>
	        <div>hello</div>
        </Provider>
    }
}