import React from 'react'
import SendVacancyTrigger from './SendVacancyTrigger'
import SendVacancyForm from './SendVacancyForm'
import ReactModal from 'react-modal'
import { sendVacancyApi } from '../../api/sendVacancyApi'

export class SendVacancyWrapper extends React.Component {
	state = {
		isOpen: false,
		sending: false,
		error: ''
	}

	showModal = () => this.setState({isOpen: true})
	hideModal = () => this.setState({isOpen: false})

	onSubmit = (vacancyId, message) => {
		this.setState({sending: true})

		const {resume, vacanciesDictionary} = this.props
		const {id, personal} = resume
		const fullName = [personal.name, personal.surName].join(' ').trim()
		const vacancy = vacanciesDictionary.filter(v => v.id === vacancyId).shift()
		console.log(vacancyId, vacanciesDictionary, vacanciesDictionary.filter(v => v.id === vacancyId))
		if (!vacancy) {
			return
		}

		sendVacancyApi(id, vacancyId, message)
			.then(() => {
				this.setState({
					sending: false,
					isOpen: false,
					error: ''
				})

				this.props.notifySuccess(`"${vacancy.name}" successfully sent to ${fullName}`)
			})
			.catch(error => {
				console.log(error)
				this.setState({
					sending: false,
					error: 'There was trouble sending vacancy, try again'
				})

				this.props.notifyError('There was trouble sending vacancy')
			})
	}

	render () {
		const {auth, vacanciesDictionary, isResumeLoaded} = this.props
		const isComponentVisible = auth && isResumeLoaded && vacanciesDictionary.length

		if (!isComponentVisible) return null

		return this.state.isOpen
			? <ReactModal
				contentLabel="Send Vacancy"
				isOpen={this.state.isOpen}
				shouldCloseOnOverlayClick={true}>
				<button onClick={this.hideModal}>&times;</button>
				{this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
				<SendVacancyForm vacanciesDictionary={vacanciesDictionary} onSubmit={this.onSubmit}/>
			</ReactModal>
			: <SendVacancyTrigger showModal={this.showModal}/>
	}
}

export default SendVacancyWrapper
