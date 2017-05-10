import React from 'react'
import InviteTemplatesList from './InviteTemplatesList'

export default class InviteJobsearcherDialog extends React.Component {
	constructor() {
		super()
		this.inviteTextInput = null
	}

	addInviteTemplate(e) {
		e.preventDefault()
		let {id:resumeId} = this.props.resume
		let selectedTemplate = this.props.selectedInviteTemplate
		let {id} = selectedTemplate
		let val = this.inviteTextInput.value
		let isInviteTemplateChecked = this.props.isInviteTemplateToSaveChecked
		if (isInviteTemplateChecked && val) {
			let template = Object.assign(selectedTemplate, {text: val})
			this.props.saveInviteTemplate(id, template).then(() => {
				this.props.getTemplates(3496188)
			})
		}
	}

	checkInviteTemplate() {
		let isChecked = !this.props.isInviteTemplateToSaveChecked
		this.props.checkInviteTemplate(isChecked)
	}

	onTextChange = event => {
		this.props.selectInviteTemplateChangeText(event.target.value)
	}

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
			<form action="#" method="POST" onSubmit={this.addInviteTemplate.bind(this)}>
				<textarea
					value={selectedInviteTemplateText}
					onChange={this.onTextChange}
					ref={input => this.inviteTextInput = input}
					name="Invite text" cols="70" rows="10"
				/>
				<div>
					<label>
						<span>Сохранить шаблон</span>
						<input type="checkbox" onChange={this.checkInviteTemplate.bind(this)}/>
					</label>
					<input type="submit"/>
				</div>
			</form>
		</div>
	}
}
