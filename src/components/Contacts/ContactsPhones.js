import React, { Component } from 'react'

export default class ContactsPhones extends Component {
	render() {
		const { phone, additionalPhones } = this.props

		return <div>
			<p style={{ margin: 0 }}><strong>Phones:</strong></p>
			<span style={{ fontSize: 12 }}>
				{ phone }
			</span>
			<br/>
			{ additionalPhones
				? additionalPhones.map(phone => (
					<p style={{ fontSize: 12 }} key={phone}>
						{phone}
					</p>))
				: null
			}
		</div>
	}
}
