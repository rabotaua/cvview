import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ControlQuestionList from '../components/ControlQuestion/ControlQuestionList';

class ControlQuestionContainer extends React.Component {
	render() {
		return <div>
			<h2>Control question container</h2>
			<ControlQuestionList/>
		</div>
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToPops = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToPops)(ControlQuestionContainer)
