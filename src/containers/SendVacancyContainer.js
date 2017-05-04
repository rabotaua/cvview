import { connect } from 'react-redux'
import SendVacancyWrapper from '../components/SendVacancy/SendVacancyWrapper'
import { isResumeLoadedSelector } from '../reselect/isResumeLoadedSelector'

const mapStateToProps = state => ({
	auth: state.auth,
	resume: state.resume,
	vacanciesDictionary: state.vacanciesDictionary,
	isResumeLoaded: isResumeLoadedSelector(state)
})

export default connect(mapStateToProps)(SendVacancyWrapper)
