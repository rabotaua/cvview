import { connect } from 'react-redux'
import authHoc from '../components/authHoc'
import ContactsAndSocialWrap from '../components/Contacts/ContactsAndSocialWrap'

const mapStateToProps = (state) => ({
	contacts: state.resume.contact
})

const ReduxedContainer = connect(mapStateToProps)(ContactsAndSocialWrap)
export default authHoc(ReduxedContainer)(null)
