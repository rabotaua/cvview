import React from 'react'

export class SendVacancyForm extends React.Component {
	constructor (props) {
		super(props)
		const {resumeId, vacanciesDictionary} = this.props
		this.resumeId = resumeId
		this.vacanciesDictionary = vacanciesDictionary
		this.state = {
			message: '',
			sending: false,
			selectedVacancyId: ''
		}
	}

	onChange = ({target}) => this.setState({[target.name]: target.value})

	render () {
		return <div>
			<p>
				<textarea name="message" value={this.state.message} onChange={this.onChange} disabled={this.state.sending} placeholder="type your message here..."/>
			</p>
			<p>
				<select name="selectedVacancyId" value={this.state.selectedVacancyId} onChange={this.onChange} disabled={this.state.sending}>
					<option value="">select vacancy</option>
					{this.props.vacanciesDictionary.map(vac => <option key={vac.id} value={vac.id}>{vac.name}</option>)}
				</select>
			</p>
		</div>
	}
}

export default SendVacancyForm
