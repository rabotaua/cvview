import React, { Component } from 'react'
import Notification from 'react-notification-system'

export default class ContactsPhones extends Component {
	constructor() {
		super()
		this.showNotification = this.showNotification.bind(this)
	}

	componentDidMount() {
		this._notificationSystem = this.refs.notificationSystem
	}

	showNotification(options) {
		this._notificationSystem.addNotification(options);
	}

	componentDidUpdate() {
		this.props.notifs.forEach(this.showNotification)
	}

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
			<Notification ref="notificationSystem" />
		</div>
	}
}
