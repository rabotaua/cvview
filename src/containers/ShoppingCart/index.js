import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddControls from '../../components/ShoppingCart/AddControls'
import ItemsList from '../../components/ShoppingCart/ItemsList'
import TotalPrice from '../../components/ShoppingCart/TotalPrice'
import { addNewItem, changeQty } from '../../actions/cartActions'
import { getTotalPrice } from '../../reselect/cartShopping'


class ShoppingCartContainer extends Component {
    render() {
        return <div>
	        <AddControls addItemAction={this.props.addNewItemAction}/>
	        <ItemsList changeQtyAction={this.props.changeQtyAction} items={this.props.items}/>
	        <TotalPrice total={this.props.totalPrice}/>
        </div>
    }
}

const mapStateToProps = (state) => {
	return {
		items: state.shoppingCart.items,
		totalPrice: getTotalPrice(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewItemAction: bindActionCreators(addNewItem, dispatch),
		changeQtyAction: bindActionCreators(changeQty, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer)