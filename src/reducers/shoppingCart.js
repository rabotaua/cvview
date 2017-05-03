const initState = {
	items: []
}

const shoppingCart = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_NEW_ITEM':
			const { name, id, price, qty } = action
			return {
				...state.items,
				items: state.items.concat({ name, id, price, qty })
			}

		case 'CHANGE_ITEM_QTY':
			return {
				...state, items: state.items.filter(i => {
					if (i.id === action.id) {
						i.qty = action.qty
					}
					return i
				})
			}

		case 'REMOVE_ITEM':
			return {
				...state,
				items: state.items.filter(i => {
					return i.id !== action.id
				})
			}

		default:
			return state
	}
}

export default shoppingCart