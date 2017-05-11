import React from 'react'
import RefuseTemplatesList from "./RefuseTemplatesList";

export default class RefuseJobsearcherDialog extends React.Component {
	render() {
		return <div>
			<h2>Refuse dialog</h2>
			<RefuseTemplatesList
				templates={this.props.templates}
				selectRefuseTemplate={this.props.selectRefuseTemplate}
			/>
		</div>
	}
}
