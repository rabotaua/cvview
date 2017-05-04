import React, { Component } from 'react'

export default class NotesAdd extends Component {
	addNewNote(e) {
		e.preventDefault()
		this.props.addNewNoteAction(this.noteInput.value)
		this.noteInput.value = ''
	}

	render() {
		return <div style={{ margin: '20px 0 30px' }}>
			<form action="#add_notes" onSubmit={this.addNewNote.bind(this)}>
				<input ref={ inp => this.noteInput = inp } type="text" placeholder="оставить заметку"/>
			</form>
		</div>
	}
}
