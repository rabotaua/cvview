import React, { Component } from 'react'

export default class NotesList extends Component {
	render() {
		const { notes } = this.props

		return <fieldset>
			<legend>Notes:</legend>
			<ul>
				{notes.map(note => {
					return <li key={note.id}>
						{note.text}
					</li>
				})}
			</ul>
		</fieldset>
	}
}
