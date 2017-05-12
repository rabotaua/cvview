import { connect } from 'react-redux'
import { NextResumeItem } from '../components/NextResume/NextResumeItem'
import { bindActionCreators } from 'redux'
import { getResumeText, getNextResumeAction} from '../actions/resumeActions'

const mapStateToProps = (state) => ({
	nextResume: state.nextResume,
	cities: state.citiesDictionary
})

const mapDispatchToProps = (dispatch) => ({
	getResumeText: bindActionCreators(getResumeText, dispatch),
	getNextResumeAction: bindActionCreators(getNextResumeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NextResumeItem)
