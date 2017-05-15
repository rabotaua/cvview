import {createSelector} from 'reselect'
import * as actions from '../actions/actionConst'

export const vacancyNotifsSelector = createSelector(
	state => state.notifs,
	notifs => notifs.filter(
		notif => notif.type === actions.VACANCY_SUCCESS_NOTIFICATION ||
		notif.type === actions.VACANCY_FAIL_NOTIFICATION)
)

export const notesNotifsSelector = createSelector(
	state => state.notifs,
	notifs => notifs.filter(
		notif => notif.type === actions.NOTES_SUCCESS_NOTIFICATION ||
		notif.type === actions.NOTES_FAIL_NOTIFICATION)
)

export const contactsNotifsSelector = createSelector(
	state => state.notifs,
	notifs => notifs.filter(
		notif => notif.type === actions.CONTACTS_SUCCESS_NOTIFICATION ||
		notif.type === actions.CONTACTS_FAIL_NOTIFICATION)
)
