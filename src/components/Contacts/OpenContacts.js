import React, { Component } from 'react'

export default class OpenContacts extends Component {
	constructor() {
		super()

		this.state = {
			paymentsShow: false
		}
	}

	showPayments() {
		this.setState({ paymentsShow: true })
	}

	openContacts() {
		this.setState({ paymentsShow: false })
		this.props.openContacts()
	}

	render() {
		const btnStyle = {
			cursor: 'pointer',
			display: 'inline-block',
			background: '#ff5252',
			color: '#fff',
			textTransform: 'uppercase',
			padding: 10,
			fontSize: 14
		}
		const { unUsedContacts } = this.props

		return <div style={{ margin: '30px 0', background: '#eee', padding: 10 }}>
			<p style={{ fontSize: 14, marginBottom: 3 }}>Количество неиспользованных контактов на сегодня:
				<span> {unUsedContacts} </span>
			</p>

			{ unUsedContacts
				? <p onClick={ this.showPayments.bind(this) } style={ btnStyle }>
					Открыть контакты
				</p>
				: <p>Вы использовали все контакты!!!</p> }

			{ this.state.paymentsShow ? <div style={{ margin: '30px 0', fontSize: 20 }}>
				<a onClick={this.openContacts.bind(this)} href="#">Оплатить картой</a>
				<a onClick={this.openContacts.bind(this)} href="#" style={{ marginLeft: 50 }}>Выставить счёт</a>
			</div> : null }
		</div>
	}
}
