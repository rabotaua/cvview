import React from 'react'

export class SendMessageForm extends React.Component {
	constructor (props) {
		super(props)
		this.minMessageLength = 5
		this.state = {
			message: '',
			sending: false,
			isMinLengthErrorVisible: false,
			isSubmitButtonDisabled: true
		}
	}

	onMessageChange = ({target: {value}}) => {
		const isMinLengthErrorVisible = value.length && value.length < this.minMessageLength
		this.setState({
			message: value,
			isMinLengthErrorVisible,
			isSubmitButtonDisabled: this.state.sending || isMinLengthErrorVisible
		})
	}

	doSubmit = event => {
		event.preventDefault()
		if (this.state.isSubmitButtonDisabled) {
			return
		}

		this.props.onSubmit(this.state.message)
	}

	render () {

		return <form onSubmit={this.doSubmit}>
			<div>
				<textarea name="message" value={this.state.message} onChange={this.onMessageChange} disabled={this.state.sending} placeholder="type your message here..."/>
				{this.state.isMinLengthErrorVisible ?
					<div style={{color: 'red'}}>Should be at least 5 chars</div> : null}
			</div>
			<input type="submit" value="Submit" disabled={this.state.isSubmitButtonDisabled}/>
		</form>
	}
}

export default SendMessageForm
