import { openContactsApi } from '../api/contactsApi'
import { getResumeText } from './resumeActions'


export const openContacts = () => (dispatch, getState) => {
	dispatch({ type: 'OPEN_CONTACTS_REQUEST' })

	const resumeID = getState().resume.id
	const resumeData = getState().resume

	openContactsApi(resumeData).then(() => {
		dispatch({ type: 'DECREMENT_UNUSED_COUNT' })
		dispatch(getResumeText(resumeID))
		dispatch({ type: 'OPEN_CONTACTS_SUCCESS' })
	})
}
