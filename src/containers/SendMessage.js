import React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { notifyError, notifySuccess } from '../actions/notifyActions'
import { bindActionCreators } from 'redux'

export class SendMessage extends React.Component {
	minMessageLength = 5

	state = {
		isOpen: false,
		message: '',
		sending: false,
		error: ''
	}

	showModal = () => this.setState({isOpen: true, message: ''})
	hideModal = () => this.setState({isOpen: false, message: ''})
	onChange = ({target}) => this.setState({[target.name]: target.value})

	submit = event => {
		event.preventDefault()

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
		if (!this.props.auth || !Object.keys(this.props.resume).length) return null

		if (this.state.isOpen) {
			const isMinLengthErrorVisible = this.state.message.length && this.state.message.length < this.minMessageLength
			const isSubmitButtonDisabled = this.state.sending || isMinLengthErrorVisible
			return <ReactModal
				contentLabel="Send Message"
				isOpen={this.state.isOpen}
				shouldCloseOnOverlayClick={true}>
				<button onClick={this.hideModal}>&times;</button>
				{this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
				<div>
					<form onSubmit={this.submit}>
						<div>
							<textarea name="message" value={this.state.message} onChange={this.onChange} disabled={this.state.sending} placeholder="type your message here..."/>
							{isMinLengthErrorVisible ?
								<div style={{color: 'red'}}>Should be at least 5 chars</div> : null}
						</div>
						<input type="submit" value="Submit" disabled={isSubmitButtonDisabled}/>
					</form>
				</div>
			</ReactModal>
		}

		return <div>
			<button onClick={this.showModal}>send message</button>
		</div>
	}
}

const mapStateToProps = ({auth, resume}) => ({auth, resume})
const mapDispatchToProps = (dispatch) => ({
	notifySuccess: bindActionCreators(notifySuccess, dispatch),
	notifyError: bindActionCreators(notifyError, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)
