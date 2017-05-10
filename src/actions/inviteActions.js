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

export const saveInviteTemplate = (id, template) => dispatch => {
	return inviteApi.saveInviteTemplate(id, template).then(template => {
		dispatch({
			type: 'SAVE_INVITE_TEMPLATE',
			template
		})
	})
}

export const checkInviteTemplateToSave = isChecked => dispatch => {
	dispatch({
		type: 'CHECK_INVITE_TEMPLATE',
		isChecked
	})
}

export const openInviteDialog = () => dispatch => {
	dispatch({
		type: 'OPEN_INVITE_DIALOG'
	})
}

export const closeInviteDialog = () => dispatch => {
	dispatch({
		type: 'CLOSE_INVITE_DIALOG'
	})
}
