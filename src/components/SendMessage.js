import React from 'react'
import authHoc from './authHoc'

export class SendMessage extends React.Component {
	static state = {
		isSendMessageDialogVisible: false
	}

	render () {
		return <div>
			<fieldset>
				<legend>SendMessage</legend>
				SendMessage
			</fieldset>
		</div>
	}
}

export default authHoc(SendMessage)
