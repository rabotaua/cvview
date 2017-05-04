import React from 'react'

export class SendVacancyWrapper extends React.Component {
	minMessageLength = 5

	state = {
		isOpen: false,
		message: '',
		sending: false,
		error: ''
	}

	render () {
		const {auth, resume, vacanciesDictionary, isResumeLoaded} = this.props
		if (!auth || !isResumeLoaded) return null

		return <div>
			SendVacancyWrapper
		</div>
	}
}

export default SendVacancyWrapper
