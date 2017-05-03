import React, { Component } from 'react'
import { getNotesList } from '../actions/notesActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NotesList from '../components/NotesList'

class NotesContainer extends Component {
	componentWillMount() {
		this.props.getNotesListAction(3496188)
	}

	render() {
		return <div>
			<NotesList notes={this.props.notes}/>
		</div>
	}
}

const mapStateToProps = (state) => ({
	notes: state.notes
})

const mapDispatchToProps = (dispatch) => ({
	getNotesListAction: bindActionCreators(getNotesList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
