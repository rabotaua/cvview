import React from 'react'
import authHoc from './authHoc'

const btnStyle = {
	cursor: 'pointer',
	marginLeft: 20,
	display: 'inline-block',
	border: '1px solid #444',
	borderRadius: 2,
	padding: 5,
	color: '#999'
}

const Logged = ({ signOut }) => <p>
	Hello, %username%

	<span style={btnStyle} onClick={signOut}>
		log out..
	</span>
</p>

const NotLogged = ({ signIn }) => <p>
	<span style={btnStyle} onClick={signIn}>log in</span>
</p>

export default authHoc(Logged)(NotLogged)
