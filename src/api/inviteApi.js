import 'whatwg-fetch'

export const getTemplates = resumeId => fetch(`http://localhost:3001/inviteTemplates/?resumeId=${resumeId}`)
	.then(res => res.json())

export const editInviteTemplate = (id, template) => fetch(`http://localhost:3001/inviteTemplates/${id}`,
	{
		method: 'PUT',
		body: template
	})
