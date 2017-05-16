import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getResumeText} from '../actions/resumeActions'
import ControlQuestionList from '../components/ControlQuestion/ControlQuestionList'
import {controlQuestionSelector} from '../reselect/controlQuestionSelector'

class ControlQuestionContainer extends React.Component {
	componentWillMount() {
		this.props.getResumeTextAction(3496188)
	}

	render() {
		return <div>
			<h2>Control question container</h2>
			<ControlQuestionList controlQuestionsPercentage={this.props.controlQuestionsPercentage} controlQuestions={this.props.controlQuestions}/>
		</div>
	}
}

const mapStateToProps = state => ({
	controlQuestions: state.resume.controlQuestions,
	controlQuestionsPercentage: controlQuestionSelector(state)
})

const mapDispatchToPops = dispatch => ({
	getResumeTextAction: bindActionCreators(getResumeText, dispatch)
})

export default connect(mapStateToProps, mapDispatchToPops)(ControlQuestionContainer)
