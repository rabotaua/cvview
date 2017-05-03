import { connect } from 'react-redux'
import { CvText } from '../components/CvText'

const mapStateToProps = (state) => ({
	state
})

const mapDispatchToProps = (dispatch) => ({
	dispatch
	// counterIncrement: bindActionCreators(counterIncrement, dispatch),
	// counterDecrement: bindActionCreators(counterDecrement, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CvText)
