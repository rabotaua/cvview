import React from 'react'
import SendVacancyTrigger from './SendVacancyTrigger'
import SendVacancyModal from './SendVacancyModal'
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

		if (this.state.isOpen) return <div>modal</div>

		return this.state.isOpen
			? <ReactModal
				contentLabel="Send Vacancy"
				isOpen={this.state.isOpen}
				shouldCloseOnOverlayClick={true}>
				<button onClick={this.hideModal}>&times;</button>
				<SendVacancyModal/>
			</ReactModal>
			: <SendVacancyTrigger showModal={this.showModal}/>
	}
}

export default SendVacancyWrapper
