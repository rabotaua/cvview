import React from 'react'

export default class RefuseTemplatesList extends React.Component {
	selectTemplate(e) {
		const id = e.target.value
		const targetTemplate = this.props.templates.filter(template => {
			return template.id.toString() === id.toString()
		}).shift()
		this.props.selectRefuseTemplate(targetTemplate)
	}

	render() {
		const templates = this.props.templates.map(template => {
			return <option
				key={template.id}
				value={template.id}>{template.lng}</option>
		})
		return <ul>
			<h3>Templates list</h3>
			<select name="invite_templates" onChange={this.selectTemplate.bind(this)}>
				{templates}
			</select>
		</ul>
	}
}
