import React, { Component } from 'react'
import { Provider } from 'react-redux'
import appStore from './store'
import ShoppingCart from './containers/ShoppingCart'
import CounterSmart from './containers/CounterSmart'
import RestrictedContent from './containers/RestrictedContent'
import CvTextContainer from './containers/CvTextContainer'

export default class App extends Component {
	render () {
		return <Provider store={appStore}>
			<div>
				<CvTextContainer />
				<ShoppingCart/>
				<hr />
				<CounterSmart/>
				<RestrictedContent/>
			</div>
		</Provider>
	}
}
