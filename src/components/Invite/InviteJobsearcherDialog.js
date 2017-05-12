import React from 'react'
import InviteTemplatesList from './InviteTemplatesList'
import './Invite.css'

export default class InviteJobsearcherDialog extends React.Component {
	constructor() {
		super()
		this.inviteTextInput = null
	}

	addInviteTemplate(e) {
		e.preventDefault()
		let selectedTemplate = this.props.selectedInviteTemplate
		let {id} = selectedTemplate
		let val = this.inviteTextInput.value
		let isInviteTemplateChecked = this.props.isInviteTemplateToSaveChecked
		if (!val) return
		if (isInviteTemplateChecked) {
			let template
			if (id) {
				template = Object.assign({}, selectedTemplate, {text: val})
			} else {
				id = this.props.templates[0].id
				template = Object.assign({}, this.props.templates[0], {text: val})
			}
			this.props.saveInviteTemplate(id, template).then(() => {
				this.props.getTemplates(3496188)
				this.props.selectInviteTemplate({})
			})
		}
		this.props.sendInvite()
		this.closeDialog()
		this.inviteTextInput.value = ''
		this.props.selectInviteTemplate({})
	}

	checkInviteTemplate() {
		let isChecked = !this.props.isInviteTemplateToSaveChecked
		this.props.checkInviteTemplate(isChecked)
	}

	onTextChange = event => {
		this.props.selectInviteTemplateChangeText(event.target.value)
	}

	closeDialog() {
		this.props.selectInviteTemplate({})
		this.props.closeInviteDialog()
	}

	toggleInviteTemplatesList() {
		let visible = this.props.isInviteTemplatesListVisible
		if (visible) {
			this.props.hideInviteTemplatesList()
			this.props.selectInviteTemplate({})
			this.inviteTextInput.value = ''
		} else {
			this.props.showInviteTemplatesList()
			this.props.selectInviteTemplate(this.props.templates[0])
		}
	}

	render() {
		let {name, middleName, surName} = this.props.resume.personal || {}
		let selectedInviteTemplateText = this.props.selectedInviteTemplate.text
		let styles = {
			width: '560px',
			height: '560px',
			position: 'fixed',
			display: this.props.isInviteDialogOpen ? 'block' : 'none',
			top: '50%',
			left: '50%',
			padding: '20px',
			backgroundColor: '#fff',
			transform: 'translate(-50%, -50%)',
			boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14)',
			zIndex: 666
		}
		return <div className="invite-dialog-close" style={styles}>
			<span className='close-dialog' onClick={this.closeDialog.bind(this)}>&times;</span>
			<h3 className="f-custom-heading fd-fat-daimyo">Пригласить кандидата на собеседование</h3>
			<h1 className="title">Отказать кандидату</h1>
			<div>
				<h4>Кандидат</h4>
				<p>{`${name} ${middleName} ${surName}`}</p>
			</div>
				<button onClick={this.toggleInviteTemplatesList.bind(this)}>Зaгрузить из шаблона</button>
			<div style={{display: this.props.isInviteTemplatesListVisible ? 'block' : 'none'}}>
				<InviteTemplatesList
					templates={this.props.templates}
					inviteTextInput={this.inviteTextInput}
					selectInviteTemplate={this.props.selectInviteTemplate}
					selectedInviteTemplate={this.props.selectedInviteTemplate}
				/>
			</div>
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
					<input type="submit" value="ПРИГЛАСИТЬ" style={{marginRight: '10px'}}/>
					<button onClick={this.closeDialog.bind(this)}>ОТМЕНИТЬ</button>
				</div>
			</form>
		</div>
	}
}
