import { connect } from 'react-redux'
import authHoc from '../components/authHoc'
import ContactsAndSocialWrap from '../components/Contacts/ContactsAndSocialWrap'
import { bindActionCreators } from 'redux'
import { openContacts } from '../actions/contactsActions'

const mapStateToProps = ({ resume, userData }) => ({
	contacts: resume.contact,
	unUsedContacts: userData.unusedContacts
})

const mapDispatchToProps = dispatch => ({
	openContactsAction: bindActionCreators(openContacts, dispatch)
})

const ReduxedContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsAndSocialWrap)
export default authHoc(ReduxedContainer)(null)
