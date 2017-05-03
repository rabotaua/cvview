import React from 'react'

export const UnAuthComponent = ({ signIn }) => (
	<div style={{ padding: 10, background: 'yellow' }}>
		This content is only available for logged in users.
		<br/>
		<button onClick={signIn}>sign in?</button>
	</div>
)