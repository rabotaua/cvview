import * as refuseApi from '../api/refuseApi'

export const getTemplatesListAction = templates => ({
	type: 'GET_REFUSE_TEMPLATES',
	refuseTemplates: templates
})

export const getTemplatesList = resumeId => dispatch => {
	refuseApi.getTemplates(resumeId).then(refuseTemplates => {
		dispatch(getTemplatesListAction(refuseTemplates))
	})
}

export const selectRefuseTemplate = template => dispatch => {
	dispatch({
		type: 'SELECT_REFUSE_TEMPLATE',
		template
	})
}
