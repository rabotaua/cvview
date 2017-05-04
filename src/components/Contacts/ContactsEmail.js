import React, { Component } from 'react'

export default class  extends Component {
	constructor() {
		super()

		this.state = {
			emailIsHidden: true
		}
	}

	formattingEmail(email) {
		if (email && !email.length) return email

		if (this.state.emailIsHidden) {

			const emailArr = email.split('@')
			emailArr[0] = emailArr[0].split('').map((letter, id) => {
				return id === 0 ? letter : 'X'
			}).join('')

			return emailArr.join('')
		}

		return email
	}

	showHideEmail() {
		this.setState({
			emailIsHidden: !this.state.emailIsHidden
		})
	}

	render() {
		const style = {
			borderBottom: '1px dotted blue',
			cursor: 'pointer',
			display: 'inline-block',
			fontSize: 12,
			marginLeft: 10
		}

		return <div>
			<p style={{ margin: 0 }}><strong>Email:</strong></p>
			<span style={{ fontSize: 12 }}>
				{ this.formattingEmail(this.props.email) }
				<span onClick={this.showHideEmail.bind(this)} style={style}>
					{ this.state.emailIsHidden ? 'show' : 'hide' } email
				</span>
			</span>
		</div>
	}
}
