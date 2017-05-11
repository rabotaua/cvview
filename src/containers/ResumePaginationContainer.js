import { connect } from 'react-redux'
import { ResumePagination } from '../components/Resume/ResumePagination'
import { bindActionCreators } from 'redux'
import { getResumeText } from '../actions/resumeActions'

const mapStateToProps = (state) => ({
	resume: state.resume,
})

const mapDispatchToProps = (dispatch) => ({
	getResumeText: bindActionCreators(getResumeText, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ResumePagination)
