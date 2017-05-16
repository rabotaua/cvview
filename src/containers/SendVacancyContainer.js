import { connect } from 'react-redux'
import SendVacancyWrapper from '../components/SendVacancy/SendVacancyWrapper'
import { isResumeLoadedSelector } from '../reselect/isResumeLoadedSelector'
import { bindActionCreators } from 'redux'
import { notifyError, notifySuccess } from '../actions/notifyActions'
import { vacancyNotifsSelector } from '../reselect/notifsSelector'

const mapStateToProps = state => ({
	auth: state.auth,
	resume: state.resume,
	vacanciesDictionary: state.vacanciesDictionary,
	isResumeLoaded: isResumeLoadedSelector(state),
	notifs: state.notifs,
	vacancyNotifs: vacancyNotifsSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	notifySuccess: bindActionCreators(notifySuccess, dispatch),
	notifyError: bindActionCreators(notifyError, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SendVacancyWrapper)
