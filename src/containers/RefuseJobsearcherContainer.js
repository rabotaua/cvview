import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getTemplatesList, selectRefuseTemplate} from '../actions/refuseActions'
import RefuseJobsearcherDialog from '../components/Refuse/RefuseJobsearcherDialog'


class RefuseJobsearcherContainer extends React.Component {
	componentWillMount() {
		this.props.getTemplatesListAction(3496188);
	}

	render() {
		return <div>
			<h1>Refuse container</h1>
			<RefuseJobsearcherDialog
				getTemplates={this.props.getTemplatesListAction}
				templates={this.props.refuseTemplates}
				selectRefuseTemplate={this.props.selectRefuseTemplateAction}
			/>
		</div>
	}
}


const mapStateToProps = state => ({
	resume: state.resume,
	refuseTemplates: state.refuseTemplates,
})

const mapDispatchToProps = dispatch => ({
	getTemplatesListAction: bindActionCreators(getTemplatesList, dispatch),
	selectRefuseTemplateAction: bindActionCreators(selectRefuseTemplate, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RefuseJobsearcherContainer)
