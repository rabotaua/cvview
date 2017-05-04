import { connect } from 'react-redux'
import { SimiliarResumesList } from '../components/SimilarResumes/SimilarResumesList'

const mapStateToProps = ({similar}) => ({similar})

export default connect(mapStateToProps)(SimiliarResumesList)
