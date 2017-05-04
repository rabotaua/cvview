import React, { Component } from 'react'
import { Provider } from 'react-redux'
import appStore from './store'
import ShoppingCart from './containers/ShoppingCart'
import CounterSmart from './containers/CounterSmart'
import RestrictedContent from './containers/RestrictedContent'
import CvTextContainer from './containers/CvTextContainer'
import NotesContainer from './containers/NotesContainer'
import SendMessage from './containers/SendMessage'
import NotificationsContainer from './containers/NotificationsContainer'
import SimilarResumesContainer from './containers/SimilarResumesContainer'
import { getCitiesDictionaryAction } from './actions/dictionaryActions'
import { signIn } from './actions/auth'
import SendVacancyContainer from './containers/SendVacancyContainer'

export default class App extends Component {
	componentWillMount () {
		appStore.dispatch(getCitiesDictionaryAction())

		if (localStorage.getItem('auth')) {
			appStore.dispatch(signIn())
		}
	}
	render () {
		return <Provider store={appStore}>
			<div>
				<NotificationsContainer />
				<table width="100%">
					<tbody>
					<tr>
						<td width="66%" style={{verticalAlign: 'top'}}>
							<CvTextContainer />
						</td>
						<td style={{verticalAlign: 'top'}}>
							<SendVacancyContainer />
							<SendMessage/>
							<NotesContainer/>
						</td>
					</tr>
					</tbody>
				</table>
				<SimilarResumesContainer />
				<fieldset style={{marginTop: 100}}>
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
