import { openContactsApi } from '../api/contactsApi'
import { getResumeText } from './resumeActions'
import * as actions from './actionConst'


export const openContacts = () => (dispatch, getState) => {
	dispatch({ type: 'OPEN_CONTACTS_REQUEST' })

	const resumeID = getState().resume.id
	const resumeData = getState().resume

	openContactsApi(resumeData).then(() => {
		const uid = Date.now()

		dispatch({ type: 'DECREMENT_UNUSED_COUNT' })
		dispatch(getResumeText(resumeID))
		dispatch({ type: 'OPEN_CONTACTS_SUCCESS' })
		dispatch({
			uid,
			type: actions.CONTACTS_SUCCESS_NOTIFICATION,
			message: 'You have successfully opened contacts !',
			level: 'success'
		})
		setTimeout(() => {
			dispatch({
				uid,
				type: actions.REMOVE_NOTIFICATION
			})
		}, 5000)
	})
}
