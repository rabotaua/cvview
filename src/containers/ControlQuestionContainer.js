import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getResumeText} from '../actions/resumeActions'
import ControlQuestionList from '../components/ControlQuestion/ControlQuestionList';

class ControlQuestionContainer extends React.Component {
	componentWillMount() {

	}

	render() {
		return <div>
			<h2>Control question container</h2>
			<ControlQuestionList controlQuestions={this.props.controlQuestions}/>
		</div>
	}
}

const mapStateToProps = state => ({
	controlQuestions: state.resume.controlQuestions
})

const mapDispatchToPops = dispatch => ({
	getResumeTextAction: bindActionCreators(getResumeText, dispatch)
})

export default connect(mapStateToProps, mapDispatchToPops)(ControlQuestionContainer)
