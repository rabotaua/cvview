import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import InviteJobsearcherDialog from '../components/InviteJobsearcherDialog'
import {
	editInviteTemplate, getTemplatesList, selectInviteTemplate,
	selectInviteTemplateChangeText
} from '../actions/inviteActions'
import {getResumeText} from '../actions/resumeActions'
import VacancyCurrentButtonsContainer from "../components/VacancyCurrentButtonsContainer";

class InviteJobsearcherContainer extends React.Component {
	componentWillMount() {
		this.props.getTemplatesListAction(3496188);
		this.props.selectInviteTemplateAction({
			id: 2,
			resumeId: 3496188,
			text: "Привіт, Андрій Геннадійович Сергієнко!Дякуємо за відгук на вакансію Менеджер з продажу. На жаль, на даний момент ми не готові зробити вам пропозицію. Дякуємо за інтерес до нашої компанії.",
			createDate: "2017-05-03T02:03:48.51",
			lng: "ua"
		})
	}

	render() {
		return <div>
			<InviteJobsearcherDialog
				resume={this.props.resume}
				templates={this.props.inviteTemplates}
				editInviteTemplate={this.props.editInviteTemplateAction}
				selectInviteTemplate={this.props.selectInviteTemplateAction}
				selectedInviteTemplate={this.props.selectedInviteTemplate}
				selectInviteTemplateChangeText={this.props.selectInviteTemplateChangeText}
				/>
			<VacancyCurrentButtonsContainer/>
		</div>
	}
}

const mapStateToProps = (state) => ({
	resume: state.resume,
	inviteTemplates: state.inviteTemplates,
	selectedInviteTemplate: state.selectedInviteTemplate
})

const mapDispatchToProps = (dispatch) => ({
	getTemplatesListAction: bindActionCreators(getTemplatesList, dispatch),
	editInviteTemplateAction: bindActionCreators(editInviteTemplate, dispatch),
	selectInviteTemplateAction: bindActionCreators(selectInviteTemplate, dispatch),
	getResumeText: bindActionCreators(getResumeText, dispatch),
	selectInviteTemplateChangeText: bindActionCreators(selectInviteTemplateChangeText, dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(InviteJobsearcherContainer)

