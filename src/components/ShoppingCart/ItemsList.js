import React, { Component } from 'react'


export default class ItemsList extends Component {
	changeQty(e, itemID) {
		this.props.changeQtyAction(parseInt(e.target.value, 10), itemID)
	}

	render() {
		return <ul>
			{this.props.items.map(i => <li key={i.id}>
				{i.name}
				{ ' ' }
				<span style={{ color: 'blue' }}>
			        ${i.price}
		        </span>
				{ ' ' }
				<select onChange={(e) => this.changeQty.call(this, e, i.id)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</li>)}
		</ul>
	}
}