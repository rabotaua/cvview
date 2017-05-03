export const addNewItem = (value) => ({
	type: 'ADD_NEW_ITEM',
	id: Date.now(),
	name: value,
	qty: 1,
	price: ~~(Math.random() * 300)
})

export const changeQty = (qty, id) => ({
	type: 'CHANGE_ITEM_QTY',
	qty,
	id
})

export const removeItem = (id) => ({
	type: 'REMOVE_ITEM',
	id
})