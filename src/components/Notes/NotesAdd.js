import React, { Component } from 'react'

export default class NotesAdd extends Component {
	addNewNote(e) {
		e.preventDefault()
		const inputVal = this.noteInput.value.trim()
		if (!inputVal.length) return

		this.props.addNewNoteAction(inputVal, <this className="props resumeId"></this>)
		this.noteInput.value = ''
	}

	render() {
		return <div style={{ margin: '20px 0 30px' }}>
			<form action="#add_notes" onSubmit={this.addNewNote.bind(this)}>
				<input required ref={ inp => this.noteInput = inp } type="text" placeholder="оставить заметку"
				       style={{ padding: 10 }}/>
			</form>
		</div>
	}
}
