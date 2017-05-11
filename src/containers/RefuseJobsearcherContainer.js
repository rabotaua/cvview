import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getTemplatesList, selectRefuseTemplate} from '../actions/refuseActions'
import RefuseJobsearcherDialog from '../components/Refuse/RefuseJobsearcherDialog'


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
	selectedRefuseTemplate: state.selectedRefuseTemplate,
})

const mapDispatchToProps = dispatch => ({
	getTemplatesListAction: bindActionCreators(getTemplatesList, dispatch),
	selectRefuseTemplateAction: bindActionCreators(selectRefuseTemplate, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RefuseJobsearcherContainer)
