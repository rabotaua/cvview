import React from 'react'
import { connect } from 'react-redux'
import { Notification } from '../components/Notification'
import { bindActionCreators } from 'redux'
import { notifyClose } from '../actions/notifyActions'
import PropTypes from 'prop-types'

class NotificationsContainer extends React.Component {
	static propTypes = {
		notifications: PropTypes.array,
		notifyClose: PropTypes.func
	}
	static defaultProps = {
		notifications: [],
		notifyClose: () => {}
	}

	render () {
		if (!this.props.notifications.length) return null
		return <div>
			{this.props.notifications.map(notification =>
				<Notification key={notification.id} {...notification} onClose={this.props.notifyClose}/>)}
		</div>
	}
}

const mapStateToProps = ({notifications}) => ({notifications})

const mapDispatchToProps = dispatch => ({
	notifyClose: bindActionCreators(notifyClose, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)
