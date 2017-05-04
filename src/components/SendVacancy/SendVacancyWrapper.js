import React from 'react'
import SendVacancyTrigger from './SendVacancyTrigger'
import SendVacancyForm from './SendVacancyForm'
import ReactModal from 'react-modal'

export class SendVacancyWrapper extends React.Component {
	state = {
		isOpen: false
	}

	showModal = () => this.setState({isOpen: true})
	hideModal = () => this.setState({isOpen: false})

	render () {
		const {auth, resume, vacanciesDictionary, isResumeLoaded} = this.props
		const {id} = resume
		const isComponentVisible = auth && isResumeLoaded && vacanciesDictionary.length

		if (!isComponentVisible) return null

		return this.state.isOpen
			? <ReactModal
				contentLabel="Send Vacancy"
				isOpen={this.state.isOpen}
				shouldCloseOnOverlayClick={true}>
				<button onClick={this.hideModal}>&times;</button>
				<SendVacancyForm vacanciesDictionary={vacanciesDictionary}/>
			</ReactModal>
			: <SendVacancyTrigger showModal={this.showModal}/>
	}
}

export default SendVacancyWrapper
