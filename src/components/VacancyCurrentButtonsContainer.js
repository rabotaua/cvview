import React from 'react'

export default class VacancyCurrentButtonsContainer extends React.Component {
	openDialog() {
		this.props.openInviteDialog()
	}

	render() {
		return <div>
			<button onClick={this.openDialog.bind(this)}>Invite</button>
			<button>Refuse</button>
		</div>
	}
}
