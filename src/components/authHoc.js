import React, { Component } from 'react'
import { UnAuthComponent } from './UnAuth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signIn, signOut } from '../actions/auth'

export default (ChildComponent) => {
	class authHoc extends Component {
		render() {
			if (this.props.auth) {
				return <ChildComponent {...this.props} signOut={this.props.signOutAction}/>
			}
			else {
				return <UnAuthComponent signIn={this.props.signInAction}/>
			}
		}
	}

	const mapStateToProps = state => ({
		auth: state.auth
	})

	const mapDispatchToProps = dispatch => ({
		signInAction: bindActionCreators(signIn, dispatch),
		signOutAction: bindActionCreators(signOut, dispatch)
	})

	return connect(mapStateToProps, mapDispatchToProps)(authHoc)
}