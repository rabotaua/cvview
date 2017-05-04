import { addNewNote } from '../actions/notesActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NotesList from '../components/NotesList'

const mapStateToProps = ({notes}) => ({notes})

const mapDispatchToProps = (dispatch) => ({
	addNewNoteAction: bindActionCreators(addNewNote, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
