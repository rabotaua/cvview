import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions/authActions'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'


const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = (dispatch) => ({
	signInAction: bindActionCreators(signIn, dispatch),
	signOutAction: bindActionCreators(signOut, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
