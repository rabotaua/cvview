import { connect } from 'react-redux'
import { CvText } from '../components/CvText'
import { bindActionCreators } from 'redux'
import { getResumeText } from '../actions/resumeActions'

const mapStateToProps = (state) => ({
	resume: state.resume
})

const mapDispatchToProps = (dispatch) => ({
	getResumeText: bindActionCreators(getResumeText, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CvText)
