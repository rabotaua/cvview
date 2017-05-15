import React from 'react'
import Notification from 'react-notification-system'
// import PropTypes from 'prop-types'

export default class SendVacancyTrigger extends React.Component {
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
		return <div>
			<button onClick={this.props.showModal}>send vacancy</button>
			<Notification ref="notificationSystem"/>
		</div>
	}
}


// TODO: propTypes are broken somehow
// SendVacancyTrigger.propTypes = {
// 	showModal: PropTypes.func.isRequier
// }

