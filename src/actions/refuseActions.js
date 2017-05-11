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

export const saveRefuseTemplate = (id, template) => dispatch => {
	return refuseApi.saveRefuseTemplate(id, template).then(template => {
		dispatch({
			type: 'SAVE_REFUSE_TEMPLATE',
			template
		})
	})
}

export const selectRefuseTemplateChangeText = text => ({
	type: 'SELECT_REFUSE_TEMPLATE_CHANGE_TEXT',
	text
})

export const checkRefuseTemplateToSave = isChecked => dispatch => {
	dispatch({
		type: 'CHECK_REFUSE_TEMPLATE',
		isChecked
	})
}

export const openRefuseDialog = () => ({ type: 'OPEN_REFUSE_DIALOG' })

export const closeRefuseDialog = () => ({ type: 'CLOSE_REFUSE_DIALOG' })
