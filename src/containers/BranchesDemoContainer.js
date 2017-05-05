import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddControls from '../components/ShoppingCart/AddControls'
import ItemsList from '../components/ShoppingCart/ItemsList'
import TotalPrice from '../components/ShoppingCart/TotalPrice'
import { getBranchesDictionaryAction } from '../actions/dictionaryActions'


class BranchesDemoContainer extends Component {
	render() {
		let bl = this.props.branches.length
		// console.log(typeof this.props.getBranchesDictionaryAction)
		console.log('demo', bl)
		return <div>
			<h1>HELLO {bl}</h1>
			<button onClick={this.props.getBranchesDictionaryAction}>load branches</button>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		branches: state.branchesDictionary,
		notes: state.notes,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// addNewItemAction: bindActionCreators(addNewItem, dispatch),
		// changeQtyAction: bindActionCreators(changeQty, dispatch),
		// removeItemAction: bindActionCreators(removeItem, dispatch)
		getBranchesDictionaryAction: bindActionCreators(getBranchesDictionaryAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BranchesDemoContainer)
