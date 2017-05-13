import React, { Component } from 'react'
import Notification from 'react-notification-system'

export default class NotesAdd extends Component {
	constructor() {
		super()
		this.showNotification = this.showNotification.bind(this)

	}

	componentDidMount() {
		this._notificationSystem = this.refs.notificationSystem
	}

	showNotification(options) {
		if (options.type)
		this._notificationSystem.addNotification(options);
	}

	componentDidUpdate() {
		this.props.notifs.forEach(this.showNotification)
	}

	addNewNote(e) {
		e.preventDefault()
		const inputVal = this.noteInput.value.trim()
		if (!inputVal.length) return

		this.props.addNewNoteAction(inputVal, this.props.resumeId, this.showNotification)
		this.noteInput.value = ''
	}

	render() {
		return <div style={{ margin: '20px 0 30px' }}>
			<form action="#add_notes" onSubmit={this.addNewNote.bind(this)}>
				<input required ref={ inp => this.noteInput = inp } type="text" placeholder="оставить заметку"
				       style={{ padding: 10 }}/>
			</form>
			<Notification ref="notificationSystem" />
		</div>
	}
}
