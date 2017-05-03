import React, { Component } from 'react'
import authHoc from '../components/authHoc'

class RestrictedContent extends Component {
	render() {
		const style = { fontSize: 20, color: 'yellow', padding: 10, background: 'red' }
		return <div style={style}>
			Very secure data!!!
			<br/>
			<button onClick={this.props.signOut}>ohh, I'm affraid, sign out please!</button>
		</div>
	}
}

export default authHoc(RestrictedContent)