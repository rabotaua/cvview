import React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { notifySuccess } from '../actions/notifyActions'
import { bindActionCreators } from 'redux'

export class SendMessage extends React.Component {
	state = {
		isOpen: false,
		message: '',
		sending: false
	}

	showModal = () => this.setState({isOpen: true, message: ''})
	hideModal = () => this.setState({isOpen: false, message: ''})
	onChange = ({target}) => this.setState({[target.name]: target.value})

	submit = event => {
		event.preventDefault()

		this.setState({sending: true})

		// TODO: call actual api here
		setTimeout(() => {
			this.setState({
				sending: false,
				isOpen: false,
				message: ''
			})

			this.props.notifySuccess('Message sent successfully')
		}, 300)
	}

	render () {
		if (!this.props.auth || !Object.keys(this.props.resume).length) return null

		if (this.state.isOpen) {
			const isSubmitButtonDisabled = this.state.sending || !this.state.message
			return <ReactModal
				contentLabel="Send Message"
				isOpen={this.state.isOpen}
				shouldCloseOnOverlayClick={true}>
				<button onClick={this.hideModal}>&times;</button>
				<div>
					<form onSubmit={this.submit}>
						<p>
							<textarea name="message" value={this.state.message} onChange={this.onChange} disabled={this.state.sending} placeholder="type your message here..."/>
						</p>
						<p>
							<input type="submit" value="Submit" disabled={isSubmitButtonDisabled}/>
						</p>
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
	notifySuccess: bindActionCreators(notifySuccess, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)
