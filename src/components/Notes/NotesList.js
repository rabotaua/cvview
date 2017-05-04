import React, { Component } from 'react'
import NotesAdd from './NotesAdd'


const ulStyle = {
	margin: 0,
	listStyleType: 'none',
	padding: 0
}

const spanStyle = {
	color: 'grey',
	fontSize: 12
}

const noteStyle = {
	background: '#fadfc2',
	fontSize: 12,
	padding: '10px 5px'
}


export default class NotesList extends Component {

	noteIsSaving(note) {
		return note.hasOwnProperty('apiStatus') && note.apiStatus === null
	}

	noteSaveIsFail(note) {
		return note.hasOwnProperty('apiStatus') && note.apiStatus === false
	}

	formatDate(dtString) {
		const dtArr = dtString.split('T')
		return dtArr[1].substr(0, 5)
	}

	render() {
		const { notes } = this.props

		return <fieldset>
			<legend>Notes: { notes && notes.length ? notes.length : '' }</legend>

			<NotesAdd addNewNoteAction={this.props.addNewNoteAction}/>

			<ul style={ulStyle}>
				{notes.map(note => {
					return <li key={note.id} style={ this.noteIsSaving(note) ? { opacity: 0.4 } : null }>
						<span style={spanStyle}>
							{ note.private ? <u>private note</u> : '' }
							{ ' ' }
							{ this.formatDate(note.createDate) }
						</span>
						<p style={noteStyle}>
							{note.text}
						</p>


						{ this.noteSaveIsFail(note)
							? <p style={{ color: 'red' }}>Note save fail</p>
							: null
						}

					</li>
				})}
			</ul>
		</fieldset>
	}
}
