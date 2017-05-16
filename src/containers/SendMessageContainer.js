import { connect } from 'react-redux'
import SendMessageWrapper from '../components/SendMessage/SendMessageWrapper'
import { notifyError, notifySuccess } from '../actions/notifyActions'
import { bindActionCreators } from 'redux'
import { isResumeLoadedSelector } from '../reselect/isResumeLoadedSelector'

const mapStateToProps = state => ({
	auth: state.auth,
	resume: state.resume,
	isResumeLoaded: isResumeLoadedSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	notifySuccess: bindActionCreators(notifySuccess, dispatch),
	notifyError: bindActionCreators(notifyError, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageWrapper)
