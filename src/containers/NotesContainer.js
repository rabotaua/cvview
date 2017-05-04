import React, { Component } from 'react'
import { addNewNote, getNotesList } from '../actions/notesActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NotesList from '../components/Notes/NotesList'

class NotesContainer extends Component {
	componentWillMount() {
		this.props.getNotesListAction(3496188)
	}

	render() {
		return <div>
			<NotesList addNewNoteAction={this.props.addNewNoteAction} notes={this.props.notes}/>
		</div>
	}
}

const mapStateToProps = (state) => ({
	notes: state.notes
})

const mapDispatchToProps = (dispatch) => ({
	getNotesListAction: bindActionCreators(getNotesList, dispatch),
	addNewNoteAction: bindActionCreators(addNewNote, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
