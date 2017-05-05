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
import { getCitiesDictionaryAction, getBranchesDictionaryAction } from './actions/dictionaryActions'
import { signIn } from './actions/authActions'
import SendVacancyContainer from './containers/SendVacancyContainer'
import ContactsContainer from './containers/ContactsContainer'
import Header from './containers/Header'
import { getUserDataAction } from './actions/userDataActions'
import InviteJobsearcherContainer from './containers/InviteJobsearcherContainer'

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
          <div className="f-main-wrapper">
            <NotificationsContainer />
            <div className="fd-f-left fd-f-g20">
              <div className="fd-f2">
                  <CvTextContainer />
                  <ContactsContainer/>
              </div>
              <div className="fd-f1">
                <SendVacancyContainer />
                <SendMessage/>
                <NotesContainer/>
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
