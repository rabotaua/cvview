import { connect } from 'react-redux'
import { CvText } from '../components/CvText'
import { bindActionCreators } from 'redux'
import { getResumeText } from '../actions/resumeActions'
import { isResumeLoadedSelector } from '../reselect/isResumeLoadedSelector'

const mapStateToProps = (state) => ({
	resume: state.resume,
	branches: state.branchesDictionary,
	isResumeLoaded: isResumeLoadedSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	getResumeText: bindActionCreators(getResumeText, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CvText)
