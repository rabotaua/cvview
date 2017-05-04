import { connect } from 'react-redux'
import { SimiliarResumesList } from '../components/SimilarResumes/SimilarResumesList'
import { bindActionCreators } from 'redux'
import { getResumeText } from '../actions/resumeActions'

const mapStateToProps = ({similar}) => ({similar})

const mapDispatchToProps = (dispatch) => ({
	getResumeText: bindActionCreators(getResumeText, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SimiliarResumesList)
