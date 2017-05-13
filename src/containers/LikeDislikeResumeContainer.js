import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LikeDislike from '../components/Resume/LikeDislike'
import { likeResumeAction, dislikeResumeAction, toggleLikeResumeAction } from '../actions/likeDislikeResumeAction'
import { resumeIdSelector } from '../reselect/resumeIdSelector'

const mapStateToProps = state => ({
	likeDislikeResume: state.likeDislikeResume,
	resumeId: resumeIdSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
	likeResumeAction: bindActionCreators(likeResumeAction, dispatch),
	dislikeResumeAction: bindActionCreators(dislikeResumeAction, dispatch),
	toggleLikeResumeAction: bindActionCreators(toggleLikeResumeAction, dispatch),

})

export default connect(mapStateToProps, mapDispatchToProps)(LikeDislike)
