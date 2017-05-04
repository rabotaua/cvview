import React from 'react'

export class SendVacancyForm extends React.Component {
	constructor (props) {
		super(props)
		const {resumeId, vacanciesDictionary} = this.props
		this.resumeId = resumeId
		this.vacanciesDictionary = vacanciesDictionary
		this.minMessageLength = 5
		this.state = {
			message: '',
			sending: false,
			selectedVacancyId: '',
			isMinLengthErrorVisible: false,
			isVacancyErrorVisible: false,
			isSubmitButtonDisabled: true
		}
	}

	onMessageChange = ({target: {value}}) => {
		const isMinLengthErrorVisible = value.length && value.length < this.minMessageLength
		this.setState({
			message: value,
			isMinLengthErrorVisible,
			isSubmitButtonDisabled: this.state.sending || !this.state.selectedVacancyId || isMinLengthErrorVisible
		})
	}

	onVacancyChange = ({target: {value}}) => {
		const isVacancyErrorVisible = !value.length
		this.setState({
			selectedVacancyId: parseInt(value || '0', 10),
			isVacancyErrorVisible,
			isSubmitButtonDisabled: this.state.sending || isVacancyErrorVisible || !this.state.message.length || this.state.isMinLengthErrorVisible
		})
	}

	// onChange = ({target: {name, value}}) => this.setState({[name]: value})

	doSubmit = event => {
		event.preventDefault()
		if (this.state.isSubmitButtonDisabled) {
			return
		}

		this.props.onSubmit(this.state.selectedVacancyId, this.state.message)
	}

	render () {
		return <form onSubmit={this.doSubmit}>
			<p>
				<textarea value={this.state.message} onChange={this.onMessageChange} disabled={this.state.sending} placeholder="type your message here..."/>
				{this.state.isMinLengthErrorVisible ?
					<span style={{color: 'red'}}>Should be at least 5 chars</span> : null}
			</p>
			<p>
				<select value={this.state.selectedVacancyId} onChange={this.onVacancyChange} disabled={this.state.sending}>
					<option value="">select vacancy</option>
					{this.props.vacanciesDictionary.map(vac => <option key={vac.id} value={vac.id}>{vac.name}</option>)}
				</select>
				{this.state.isVacancyErrorVisible ?
					<span style={{color: 'red'}}>You need to make this choice</span> : null}
			</p>
			<p>
				<input type="submit" value="Submit" disabled={this.state.isSubmitButtonDisabled}/>
			</p>
		</form>
	}
}

export default SendVacancyForm
