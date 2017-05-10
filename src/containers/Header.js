import { connect } from 'react-redux'
import { signIn, signOut } from '../actions/authActions'
import { bindActionCreators } from 'redux'
import Header from '../components/Header/Header'


const mapStateToProps = ({ auth, userData }) => {
	return ({ auth, userName: userData.name })
}

const mapDispatchToProps = (dispatch) => ({
	signInAction: bindActionCreators(signIn, dispatch),
	signOutAction: bindActionCreators(signOut, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
