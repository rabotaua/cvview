import React from 'react'
import ReactModal from 'react-modal'
import SendMessageForm from './SendMessageForm'

export class SendMessageWrapper extends React.Component {
	state = {
		isOpen: false,
		sending: false,
		error: ''
	}

	showModal = () => this.setState({isOpen: true})
	hideModal = () => this.setState({isOpen: false})

	submit = message => {
		// event.preventDefault()

		this.setState({sending: true})

		// TODO: call actual api here
		setTimeout(() => {
			if (Date.now() % 2 === 0) {
				this.setState({
					sending: false,
					isOpen: false,
					message: '',
					error: ''
				})

				this.props.notifySuccess('Message sent successfully')
			} else {
				this.setState({
					sending: false,
					error: 'There was trouble sending message'
				})

				this.props.notifyError('There was trouble sending message')
			}
		}, 300)
	}

	render () {
		if (!this.props.auth || !this.props.isResumeLoaded) return null

		return this.state.isOpen
			? <ReactModal
				contentLabel="Send Message"
				isOpen={this.state.isOpen}
				shouldCloseOnOverlayClick={true}>
				<button onClick={this.hideModal}>&times;</button>
				{this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
				<SendMessageForm onSubmit={this.submit}/>
			</ReactModal>
			: <button onClick={this.showModal}>send message</button>

	}
}

export default SendMessageWrapper
