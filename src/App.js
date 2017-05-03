import React, { Component } from 'react'
import { Provider } from 'react-redux'
import appStore from './store'
import ShoppingCart from './containers/ShoppingCart'
import CounterSmart from './containers/CounterSmart'
import RestrictedContent from './containers/RestrictedContent'
import CvTextContainer from './containers/CvTextContainer'
import NotesContainer from './containers/NotesContainer'

export default class App extends Component {
	render () {
		return <Provider store={appStore}>
			<div>
				<CvTextContainer />
				<NotesContainer/>


				<fieldset style={{ marginTop: 100 }}>
					<legend>Examples</legend>
					<ShoppingCart/>
					<hr />
					<CounterSmart/>
					<RestrictedContent/>
				</fieldset>
			</div>
		</Provider>
	}
}
