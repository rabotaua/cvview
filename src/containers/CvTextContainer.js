import { connect } from 'react-redux'
import { CvText } from '../components/CvText'
import { bindActionCreators } from 'redux'
import { isResumeLoadedSelector } from '../reselect/isResumeLoadedSelector'

const mapStateToProps = (state) => ({
	resume: state.resume,
	isResumeLoaded: isResumeLoadedSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CvText)
