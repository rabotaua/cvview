import {addNewNote} from '../actions/notesActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NotesList from '../components/Notes/NotesList'
import {notesNotifsSelector} from '../reselect/notifsSelector'

const mapStateToProps = (state) => ({
	notes: state.notes,
	auth: state.auth,
	resumeId: state.resume.id,
	notifs: state.notifs,
	notesNotifs: notesNotifsSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	addNewNoteAction: bindActionCreators(addNewNote, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
