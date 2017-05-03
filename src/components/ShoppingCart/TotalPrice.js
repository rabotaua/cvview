import React, { Component } from 'react'

export default class TotalPrice extends Component {
	render() {
		return <div>
			{this.props.total ? <p>
				Total: <strong>{this.props.total}$</strong>
			</p> : null
			}
		</div>
	}
}