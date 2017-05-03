import { createSelector } from 'reselect'

const getItems = (state) => state.shoppingCart.items

export const getTotalPrice = createSelector(
	[getItems],
	items => {
		return items.map(i => {
			return i.qty * i.price
		}).reduce((a, b) => a + b, 0)
	}
)