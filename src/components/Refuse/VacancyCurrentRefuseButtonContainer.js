import React from 'react'

export default class VacancyCurrentRefuseButtonContainer extends React.Component {
	openRefuseDialog() {
		this.props.openRefuseDialog()
	}

	render() {
		return <div>
			<button onClick={this.openRefuseDialog.bind(this)}>Refuse</button>
		</div>
	}
}
