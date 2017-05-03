import React from 'react'
import './Notification.css'

export const Notification = ({id, message, type, onClose}) => {
	return <div className={['notification', type].join(' ')}>
		{message}
		<button onClick={() => onClose(id)}>&times;</button>
	</div>
}
