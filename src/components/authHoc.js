import React, { Component } from 'react'
import { connect } from 'react-redux'

export default IfLoggedComponent => (IfUnLoggedComponent = null) => {
	class authHoc extends Component {
		render() {
			const { auth } = this.props
			return auth ? <IfLoggedComponent {...this.props} /> : <IfUnLoggedComponent {...this.props} />
		}
	}

	const mapStateToProps = ({ auth }) => ({ auth })
	return connect(mapStateToProps)(authHoc)
}
