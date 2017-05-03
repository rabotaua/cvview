import React from 'react'
import authHoc from './authHoc'

export class SendMessage extends React.Component {
	state = {
		isSendMessageDialogVisible: false
	}

	showSendMessageDialog = () => this.setState({isSendMessageDialogVisible: true})

	render () {
		if (this.state.isSendMessageDialogVisible) {
			return <div>
				TODO: dialog
			</div>
		}

		return <div>
			<button onClick={this.showSendMessageDialog}>send message</button>
		</div>
	}
}

export default authHoc(SendMessage)
