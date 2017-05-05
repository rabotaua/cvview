import * as inviteApi from '../api/inviteApi'

export const getTemplatesListAction = templates => ({
	type: 'GET_TEMPLATES',
	inviteTemplates: templates
})

export const getTemplatesList = resumeId => dispatch => {
	inviteApi.getTemplates(resumeId).then(inviteTemplates => {
		dispatch(getTemplatesListAction(inviteTemplates))
	})
}

export const editInviteTemplate = (id, template) => dispatch => {
	inviteApi.editInviteTemplate(id, template).then(template => {
		dispatch({
			type: 'ADD_INVITE_TEMPLATE',
			template
		})
	})
}

export const selectInviteTemplate = template => dispatch => {
	dispatch({
		type: 'SELECT_INVITE_TEMPLATE',
		template
	})
}

export const selectInviteTemplateChangeText = text => ({
	type: 'SELECT_INVITE_TEMPLATE_CHANGE_TEXT',
	text
})
