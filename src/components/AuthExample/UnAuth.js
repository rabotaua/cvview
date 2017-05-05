import React from 'react'
import { bindActionCreators } from 'redux'
import { signIn } from '../../actions/authActions'
import { connect } from 'react-redux'

const UnAuthComponent = ({ signInAction }) => (
	<div style={{ padding: 10, background: 'yellow' }}>
		This content is only available for logged in users.
		<br/>
		<button onClick={signInAction}>sign in?</button>
	</div>
)

const mapDispatchToProps = dispatch => ({
	signInAction: bindActionCreators(signIn, dispatch)
})

export default connect(null, mapDispatchToProps)(UnAuthComponent)
