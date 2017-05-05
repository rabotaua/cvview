import React, { Component } from 'react'
import { connect } from 'react-redux'

const emptyComponent = () => null

export default IfLoggedComponent => (IfUnLoggedComponent = emptyComponent) => {
	class authHoc extends Component {
		render() {

			if (typeof IfUnLoggedComponent !== 'function') {
				IfUnLoggedComponent = () => null
			}

			const { auth } = this.props
			return auth ? <IfLoggedComponent {...this.props} /> : <IfUnLoggedComponent {...this.props} />
		}
	}

	const mapStateToProps = ({ auth }) => ({ auth })
	return connect(mapStateToProps)(authHoc)
}
