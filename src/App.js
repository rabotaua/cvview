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
import { signIn } from './actions/authActions'
import SendVacancyContainer from './containers/SendVacancyContainer'
import ContactsContainer from './containers/ContactsContainer'
import Header from './containers/Header'
import { getUserDataAction } from './actions/userDataActions'

export default class App extends Component {
	componentWillMount () {
		appStore.dispatch(getCitiesDictionaryAction())

		if (localStorage.getItem('auth')) {
			appStore.dispatch(signIn())

			const rndUserID = ~~(Math.random() * 5)
			appStore.dispatch(getUserDataAction(rndUserID))
		}
	}
	render () {
		return <Provider store={appStore}>
			<div>
				<Header/>
				<NotificationsContainer />
				<table style={{ marginTop: 100 }} width="100%">
					<tbody>
					<tr>
						<td width="66%" style={{verticalAlign: 'top'}}>
							<CvTextContainer />
							<ContactsContainer/>
						</td>
						<td style={{ verticalAlign: 'top', paddingTop: 10 }}>
							<SendVacancyContainer />
							<SendMessage/>
							<br/>
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
