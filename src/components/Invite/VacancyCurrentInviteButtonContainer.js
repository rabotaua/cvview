import React from 'react'

export default class VacancyCurrentInviteButtonContainer extends React.Component {
	openInviteDialog() {
		this.props.openInviteDialog()
	}

	render() {
		return <div>
			<button onClick={this.openInviteDialog.bind(this)}>Invite</button>
		</div>
	}
}
