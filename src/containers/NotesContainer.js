import { addNewNote } from '../actions/notesActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NotesList from '../components/Notes/NotesList'

const mapStateToProps = ({ notes, auth, resume, notifs }) => ({ notes, auth, resumeId: resume.id, notifs })

const mapDispatchToProps = (dispatch) => ({
	addNewNoteAction: bindActionCreators(addNewNote, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
