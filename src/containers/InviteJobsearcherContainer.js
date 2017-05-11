import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import InviteJobsearcherDialog from '../components/Invite/InviteJobsearcherDialog'
import {
	saveInviteTemplate, getTemplatesList, selectInviteTemplate,
	selectInviteTemplateChangeText, checkInviteTemplateToSave,
	openInviteDialog, closeInviteDialog, showInviteTemplatesList,
	hideInviteTemplatesList
} from '../actions/inviteActions'
import {getResumeText} from '../actions/resumeActions'
import VacancyCurrentInviteButtonContainer from "../components/Invite/VacancyCurrentInviteButtonContainer"

class InviteJobsearcherContainer extends React.Component {
	constructor() {
		super()
		this.saveInviteTemplate = this.saveInviteTemplate.bind(this)
	}

	componentWillMount() {
		this.props.getTemplatesListAction(3496188);
		// this.props.selectInviteTemplateAction({
		// 	id: 2,
		// 	resumeId: 3496188,
		// 	text: "Привіт, Андрій Геннадійович Сергієнко!Дякуємо за відгук на вакансію Менеджер з продажу. На жаль, на даний момент ми не готові зробити вам пропозицію. Дякуємо за інтерес до нашої компанії.",
		// 	createDate: "2017-05-03T02:03:48.51",
		// 	lng: "ua"
		// })
	}

	saveInviteTemplate(id, template) {
		console.log('Invitation has been sent !!!')
		return this.props.saveInviteTemplateAction(id, template)
	}

	checkInviteTemplate(isChecked) {
		this.props.checkInviteTemplateToSaveAction(isChecked)
	}

	render() {
		return <div style={{marginRight: '20px'}}>
			<InviteJobsearcherDialog
				resume={this.props.resume}
				templates={this.props.inviteTemplates}
				getTemplates={this.props.getTemplatesListAction}
				saveInviteTemplate={this.saveInviteTemplate}
				selectInviteTemplate={this.props.selectInviteTemplateAction}
				selectedInviteTemplate={this.props.selectedInviteTemplate}
				selectInviteTemplateChangeText={this.props.selectInviteTemplateChangeText}
				isInviteTemplateToSaveChecked={this.props.isInviteTemplateToSaveChecked}
				checkInviteTemplate={this.checkInviteTemplate.bind(this)}
				openInviteDialog={this.props.openInviteDialogAction}
				closeInviteDialog={this.props.closeInviteDialogAction}
				isInviteDialogOpen={this.props.isInviteDialogOpen}
				showInviteTemplatesList={this.props.showInviteTemplatesListAction}
				hideInviteTemplatesList={this.props.hideInviteTemplatesListAction}
				isInviteTemplatesListVisible={this.props.isInviteTemplatesListVisible}
				/>
			<VacancyCurrentInviteButtonContainer openInviteDialog={this.props.openInviteDialogAction}/>
		</div>
	}
}

const mapStateToProps = (state) => ({
	resume: state.resume,
	inviteTemplates: state.inviteTemplates,
	selectedInviteTemplate: state.selectedInviteTemplate,
	isInviteTemplateToSaveChecked: state.isInviteTemplateToSaveChecked,
	isInviteDialogOpen: state.isInviteDialogOpen,
	isInviteTemplatesListVisible: state.isInviteTemplatesListVisible
})

const mapDispatchToProps = (dispatch) => ({
	getTemplatesListAction: bindActionCreators(getTemplatesList, dispatch),
	saveInviteTemplateAction: bindActionCreators(saveInviteTemplate, dispatch),
	selectInviteTemplateAction: bindActionCreators(selectInviteTemplate, dispatch),
	getResumeText: bindActionCreators(getResumeText, dispatch),
	selectInviteTemplateChangeText: bindActionCreators(selectInviteTemplateChangeText, dispatch),
	checkInviteTemplateToSaveAction: bindActionCreators(checkInviteTemplateToSave, dispatch),
	openInviteDialogAction: bindActionCreators(openInviteDialog, dispatch),
	closeInviteDialogAction: bindActionCreators(closeInviteDialog, dispatch),
	showInviteTemplatesListAction: bindActionCreators(showInviteTemplatesList, dispatch),
	hideInviteTemplatesListAction: bindActionCreators(hideInviteTemplatesList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(InviteJobsearcherContainer)

