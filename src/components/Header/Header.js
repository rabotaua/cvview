import React, { Component } from 'react'
import HeaderRight from './HeaderRight'


export default class Header extends Component {
	render() {
		const stylesForHeader = {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			padding: '15px 50px',
			background: '#fff',
			boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
			zIndex: 100
		}

		const logoStyle = {
			position: 'relative',
			top: '-10px',
			marginLeft: 10
		}

		return <div className="fd-f-between-middle" style={stylesForHeader}>
			<div>
				<img src="https://images.cf-rabota.com.ua/2016/11/logo-symbol.svg" alt="rua"/>
				<img style={logoStyle} src="https://images.cf-rabota.com.ua/2016/11/logo-text-none-padding.svg"
				     alt="rua"/>
			</div>
			<div style={{ marginRight: 100 }}>
				<HeaderRight
					signOut={this.props.signOutAction}
					signIn={this.props.signInAction}
					userName={this.props.userName}
				/>
			</div>
		</div>
	}
}
