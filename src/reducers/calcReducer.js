const calcReducer = (state, action) => {
	if (action && action.type === 'A_CHANGED') {
		// return {...state, a: action.data}
		let currentState = state
		let newState = Object.assign({}, currentState)

		newState.a = action.data
		return newState
	}

	if (action && action.type === 'B_CHANGED') return {...state, b: action.data}
	if (action && action.type === 'A_AND_B_CHANGED') {
		return {...state, a: action.value, b: action.value}
	}
	if(action && action.type === 'DO_SUM') {
		return {...state, result: state.a + state.b}
	}

	return state || {a: 0, b: 0, result: 0}
}

export default calcReducer
