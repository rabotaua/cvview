import React from 'react'
import RefuseTemplatesList from "./RefuseTemplatesList";

export default class RefuseJobsearcherDialog extends React.Component {
	addRefuseTemplate(e) {
		e.preventDefault()
		let selectedTemplate = this.props.selectedRefuseTemplate
		let {id} = selectedTemplate
		let val = this.refuseTextInput.value
		let isRefuseTemplateChecked = this.props.isRefuseTemplateToSaveChecked
		if (isRefuseTemplateChecked && val) {
			let template = Object.assign(selectedTemplate, {text: val})
			this.props.saveRefuseTemplate(id, template).then(() => {
				this.props.getTemplates(3496188)
			})
		}
	}

	onTextChange = event => {
		this.props.selectRefuseTemplateChangeText(event.target.value)
	}

	checkRefuseTemplate() {
		let isChecked = !this.props.isRefuseTemplateToSaveChecked
		this.props.checkRefuseTemplate(isChecked)
	}

	closeDialog() {
		this.props.closeRefuseDialog()
	}

	render() {
		let {name, middleName, surName} = this.props.resume.personal || {}
		let selectedRefuseTemplateText = this.props.selectedRefuseTemplate.text
		let styles = {
			width: '560px',
			height: '560px',
			position: 'fixed',
			// display: this.props.isRefuseDialogOpen ? 'block' : 'none',
			top: '50%',
			left: '50%',
			padding: '20px',
			backgroundColor: '#fff',
			transform: 'translate(-50%, -50%)',
			boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14)',
			zIndex: 666
		}
		return <div className="" style={styles}>
			<span className='close-dialog' onClick={this.closeDialog.bind(this)}>&times;</span>
			<h3 className="f-custom-heading fd-fat-daimyo">Отказать кандидату</h3>
			<div>
				<h4>Кандидат</h4>
				<p>{`${name} ${middleName} ${surName}`}</p>
			</div>
			<RefuseTemplatesList
				templates={this.props.templates}
				refuseTextInput={this.refuseTextInput}
				selectRefuseTemplate={this.props.selectRefuseTemplate}
				selectedRefuseTemplate={this.props.selectedRefuseTemplate}
			/>
			<form action="#" method="POST" onSubmit={this.addRefuseTemplate.bind(this)}>
				<textarea
					value={selectedRefuseTemplateText}
					onChange={this.onTextChange}
					ref={input => this.refuseTextInput = input}
					name="Refuse text" cols="70" rows="10"
				/>
				<div>
					<label>
						<span>Сохранить шаблон</span>
						<input type="checkbox" onChange={this.checkRefuseTemplate.bind(this)}/>
					</label>
					<input type="submit"/>
				</div>
			</form>
		</div>

	}
}
