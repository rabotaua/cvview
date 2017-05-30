import React, {Component} from 'react'
import {Provider} from 'react-redux'
import appStore from './store'
import { Route, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ShoppingCart from './containers/ShoppingCart'
import CounterSmart from './containers/CounterSmart'
import RestrictedContent from './containers/RestrictedContent'
import CvTextContainer from './containers/CvTextContainer'
import NotesContainer from './containers/NotesContainer'
import NotificationsContainer from './containers/NotificationsContainer'
import SimilarResumesContainer from './containers/SimilarResumesContainer'
import { getResumeText } from './actions/resumeActions'
import {getBranchesDictionaryAction, getCitiesDictionaryAction} from './actions/dictionaryActions'
import {signIn} from './actions/authActions'
import Header from './containers/Header'
import {getUserDataAction} from './actions/userDataActions'
import InviteJobsearcherContainer from './containers/InviteJobsearcherContainer'
import RefuseJobsearcherContainer from './containers/RefuseJobsearcherContainer'
import NextResumeContainer from './containers/NextResumeContainer'
import CommunicationWrapper from './components/Communication/CommunicationWrapper'
import ControlQuestionContainer from './containers/ControlQuestionContainer'
import GaEventsDemo from './containers/GaEventsDemo'

const gaCode = `
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-98890574-1', 'auto');
	ga('send', 'pageview');
`

export default class App extends Component {
	componentDidMount() {
		/* insert google analytics script */
		const gaScript = document.createElement('script')
		gaScript.text = gaCode
		document.head.appendChild(gaScript)
	}

	componentWillMount() {
		appStore.dispatch(getResumeText(appStore.getState().resume.id || window.defaultResumeId))
		appStore.dispatch(getCitiesDictionaryAction())
		appStore.dispatch(getBranchesDictionaryAction())

		if (localStorage.getItem('auth')) {
			appStore.dispatch(signIn())

			const rndUserID = ~~(Math.random() * 5)
			appStore.dispatch(getUserDataAction(rndUserID))
		}
	}

	render() {
		return <Provider store={appStore}>
			<div>
				<Header/>
				<div className="f-main-wrapper" style={{marginTop: '82px'}}>
					<NotificationsContainer />
					<div className="fd-f-left fd-f-g20">
						<div className="fd-f2">
							<div className="fd-c-stretch fd-f-g20">
								<CvTextContainer />
							</div>
							<NextResumeContainer />
						</div>
						<div className="fd-f1">
							<div className="fd-c-stretch fd-f-g20">
								<div className="fd-f">
									<InviteJobsearcherContainer/>
									<RefuseJobsearcherContainer/>
								</div>
								<CommunicationWrapper />
								<NotesContainer/>
							</div>
						</div>
					</div>
					<SimilarResumesContainer />
					<ControlQuestionContainer/>
					<fieldset style={{marginTop: 100}}>
						<legend>Examples</legend>
						<ShoppingCart/>
						<hr />
						<CounterSmart/>
						<RestrictedContent/>
						<br/>
						<GaEventsDemo/>
					</fieldset>
				</div>
			</div>
		</Provider>
	}
}
