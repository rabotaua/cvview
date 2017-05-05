import React from 'react'
import { bindActionCreators } from 'redux'
import { signOut } from '../../actions/authActions'
import { connect } from 'react-redux'

const Logged = ({ signOutAction }) => {
	const style = { fontSize: 20, color: 'yellow', padding: 10, background: 'red' }
	return <div style={style}>
		Very secure data!!!
		<br/>
		<button onClick={signOutAction}>ohh, I'm affraid, sign out please!</button>
	</div>

}

const mapDispatchToProps = dispatch => ({
	signOutAction: bindActionCreators(signOut, dispatch)
})

export default connect(null, mapDispatchToProps)(Logged)
