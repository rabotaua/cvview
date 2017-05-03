import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddControls from '../../components/ShoppingCart/AddControls'


class ShoppingCartContainer extends Component {
    render() {
        return <div>
	        <AddControls/>
        </div>
    }
}

const mapStateToProps = (state) => {
	return {
		state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer)