import React, { Component } from 'react'
import { Provider } from 'react-redux'
import appStore from './store'
import ShoppingCart from './containers/ShoppingCart'
import CounterSmart from './containers/CounterSmart'
import RestrictedContent from './containers/RestrictedContent'
import CvTextContainer from './containers/CvTextContainer'
import NotesContainer from './containers/NotesContainer'
import NotificationsContainer from './containers/NotificationsContainer'
import SimilarResumesContainer from './containers/SimilarResumesContainer'
import { getBranchesDictionaryAction, getCitiesDictionaryAction } from './actions/dictionaryActions'
import { signIn } from './actions/authActions'
import ContactsContainer from './containers/ContactsContainer'
import Header from './containers/Header'
import { getUserDataAction } from './actions/userDataActions'
import InviteJobsearcherContainer from './containers/InviteJobsearcherContainer'
import CommunicationWrapper from './components/Communication/CommunicationWrapper'

export default class App extends Component {
	componentWillMount () {
		appStore.dispatch(getCitiesDictionaryAction())
		appStore.dispatch(getBranchesDictionaryAction())

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
				<div className="f-main-wrapper" style={{marginTop: '82px'}}>
					<NotificationsContainer />
					<div className="fd-f-left fd-f-g20">
						<div className="fd-f2">
							<div className="fd-c-stretch fd-f-g20">
								<ContactsContainer/>
								<CvTextContainer />
							</div>
						</div>
						<div className="fd-f1">
							<div className="fd-c-stretch fd-f-g20">
								<CommunicationWrapper />
								<NotesContainer/>
							</div>
						</div>
					</div>
					<SimilarResumesContainer />
					<fieldset style={{marginTop: 100}}>
						<legend>Examples</legend>
						<ShoppingCart/>
						<hr />
						<CounterSmart/>
						<RestrictedContent/>
					</fieldset>
					<InviteJobsearcherContainer/>
				</div>
			</div>
		</Provider>
	}
}
