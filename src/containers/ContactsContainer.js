import { connect } from 'react-redux'
import authHoc from '../components/authHoc'
import ContactsAndSocialWrap from '../components/Contacts/ContactsAndSocialWrap'
import { bindActionCreators } from 'redux'
import { openContacts } from '../actions/contactsActions'
import { contactsNotifsSelector } from '../reselect/notifsSelector'

const mapStateToProps = state => ({
	contacts: state.resume.contact,
	unUsedContacts: state.userData.unusedContacts,
	notifs: state.notifs,
	contactsNotifs: contactsNotifsSelector(state)
})

const mapDispatchToProps = dispatch => ({
	openContactsAction: bindActionCreators(openContacts, dispatch)
})

const ReduxedContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsAndSocialWrap)
export default authHoc(ReduxedContainer)(null)
