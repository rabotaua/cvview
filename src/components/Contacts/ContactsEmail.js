import React, { Component } from 'react'

export default class  extends Component {
	render() {
		return <div>
			<p style={{ margin: 0 }}><strong>Email:</strong></p>
			<span style={{ fontSize: 12 }}>
				{ this.props.email }
			</span>
		</div>
	}
}
