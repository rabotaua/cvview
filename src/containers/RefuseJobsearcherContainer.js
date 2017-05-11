import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
	getTemplatesList, selectRefuseTemplate, closeRefuseDialog,
	openRefuseDialog, checkRefuseTemplateToSave, selectRefuseTemplateChangeText,
	saveRefuseTemplate
} from '../actions/refuseActions'
import RefuseJobsearcherDialog from '../components/Refuse/RefuseJobsearcherDialog'
import VacancyCurrentRefuseButtonContainer from '../components/Refuse/VacancyCurrentRefuseButtonContainer'


class RefuseJobsearcherContainer extends React.Component {
	componentWillMount() {
		this.props.getTemplatesListAction(3496188)
		this.props.selectRefuseTemplateAction({
			id: 2,
			resumeId: 3496188,
			text: "Привіт, Андрій Геннадійович Сергієнко!Дякуємо за відгук на вакансію Менеджер з продажу. На жаль, на даний момент ми не готові зробити вам пропозицію. Дякуємо за інтерес до нашої компанії.",
			createDate: "2017-05-03T02:03:48.51",
			lng: "ua"
		})
	}

	saveRefuseTemplate(id, template) {
		console.log('Refuse has been sent !!!')
		return this.props.saveRefuseTemplateAction(id, template)
	}

	checkRefuseTemplate(isChecked) {
		this.props.checkRefuseTemplateToSaveAction(isChecked)
	}

	render() {
		return <div>
			<RefuseJobsearcherDialog
				resume={this.props.resume}
				getTemplates={this.props.getTemplatesListAction}
				templates={this.props.refuseTemplates}
				saveRefuseTemplate={this.saveRefuseTemplate.bind(this)}
				selectRefuseTemplate={this.props.selectRefuseTemplateAction}
				selectRefuseTemplateChangeText={this.props.selectRefuseTemplateChangeText}
				selectedRefuseTemplate={this.props.selectedRefuseTemplate}
				closeRefuseDialog={this.props.closeRefuseDialogAction}
				openRefuseDialog={this.props.openRefuseDialogAction}
				isRefuseTemplateToSaveChecked={this.props.isRefuseTemplateToSaveChecked}
				checkRefuseTemplate={this.checkRefuseTemplate.bind(this)}
				isRefuseDialogOpen={this.props.isRefuseDialogOpen}
			/>
			<VacancyCurrentRefuseButtonContainer openRefuseDialog={this.props.openRefuseDialogAction}/>
		</div>
	}
}


const mapStateToProps = state => ({
	resume: state.resume,
	refuseTemplates: state.refuseTemplates,
	selectedRefuseTemplate: state.selectedRefuseTemplate,
	isRefuseTemplateToSaveChecked: state.isRefuseTemplateToSaveChecked,
	isRefuseDialogOpen: state.isRefuseDialogOpen
})

const mapDispatchToProps = dispatch => ({
	getTemplatesListAction: bindActionCreators(getTemplatesList, dispatch),
	saveRefuseTemplateAction: bindActionCreators(saveRefuseTemplate, dispatch),
	selectRefuseTemplateAction: bindActionCreators(selectRefuseTemplate, dispatch),
	closeRefuseDialogAction: bindActionCreators(closeRefuseDialog, dispatch),
	openRefuseDialogAction: bindActionCreators(openRefuseDialog, dispatch),
	checkRefuseTemplateToSaveAction: bindActionCreators(checkRefuseTemplateToSave, dispatch),
	selectRefuseTemplateChangeText: bindActionCreators(selectRefuseTemplateChangeText, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RefuseJobsearcherContainer)
