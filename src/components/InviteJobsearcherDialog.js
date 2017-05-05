import React from 'react'
import InviteTemplatesList from "./InviteTemplatesList";

export default class InviteJobsearcherDialog extends React.Component {
	constructor() {
		super()
		this.inviteTextInput = null
	}

	addInviteTemplate(e) {
		let {id:resumeId} = this.props.resume
		e.preventDefault()
		let val = this.inviteTextInput.value
		if (val) {
			let templ = {
				resumeId,
				text: val,
				createDate: Date.now()
			}
		}
	}

	onTextChange = event => this.props.selectInviteTemplateChangeText(event.target.text)

	render() {
		let {name, middleName, surName} = this.props.resume.personal || {}
		let selectedInviteTemplateText = this.props.selectedInviteTemplate.text
		return <div>
			<h1 className="title">Отказать кандидату</h1>
			<div>
				<h4>Кандидат</h4>
				<p>{`${name} ${middleName} ${surName}`}</p>
			</div>
			<InviteTemplatesList
				templates={this.props.templates}
				inviteTextInput={this.inviteTextInput}
				selectInviteTemplate={this.props.selectInviteTemplate}
				selectedInviteTemplate={this.props.selectedInviteTemplate}
			/>
			<form action="#" method="POST">
				<textarea
					value={selectedInviteTemplateText}
					onChange={this.onTextChange}
					ref={input => this.inviteTextInput = input}
					name="Invite text" cols="70" rows="10"
				></textarea>
				<input type="submit" onSubmit={this.addInviteTemplate.bind(this)}/>
			</form>
		</div>
	}
}
