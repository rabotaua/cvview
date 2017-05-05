import calcReducer from './calcReducer'

// it('should do something', () => {
// 	// Arrange
// 	const a = 2
// 	const b = 2
// 	// Act
// 	const c = a + b
// 	// Assert
// 	expect(c).toBe(4)
// })

it('should not die if called', () => {
	// Arrange
	calcReducer({}, {})
	// Act
	// Assert
})

it('should return initial state in nothing passed', () => {
	// Arrange

	// Act
	const newState = calcReducer()

	// Assert
	expect(newState).toEqual({a: 0, b: 0, result: 0})
})

it('should do nothing to unknown actions', () => {
	// Arrange
	const currentState = {foo: 'bar'}
	const action = {type: 'foo'}

	// Act
	const newState = calcReducer(currentState, action)

	// Assert
	expect(newState).toEqual(currentState)
})

it('should accept A_CHANGED action', () => {
	// Arrange
	let state = {a: 0, b: 0}
	const action = {type: 'A_CHANGED', data: 3}

	// Act
	state = calcReducer(state, action)

	// Assert
	expect(state).toEqual({a: 3, b: 0})
})

it('should accept B_CHANGED action', () => {
	// Arrange
	let state = {a: 0, b: 0}
	const action = {type: 'B_CHANGED', data: 1}

	// Act
	state = calcReducer(state, action)

	// Assert
	expect(state).toEqual({a: 0, b: 1})
})

it('should not touch A on B_CHANGED action', () => {
	// Arrange
	let state = {a: 5, b: 0}
	const action = {type: 'B_CHANGED', data: 3}

	// Act
	state = calcReducer(state, action)

	// Assert
	expect(state).toEqual({a: 5, b: 3})
})

it('should not die if initialState is wierd', () => {
	// Arrange
	let state = 5
	const action = {type: 'FOO', data: 1}

	// Act
	state = calcReducer(state, action)

	// Assert
	expect(state).toEqual(5)
})

it('should accept A_AND_B_CHANGED action', () => {
	// Arrange
	let state = {a: 0, b: 0}
	const action = {type: 'A_AND_B_CHANGED', value: 2}

	// Act
	state = calcReducer(state, action)

	// Assert
	expect(state).toEqual({a: 2, b: 2})
})

it('should accept DO_SUM action', () => {
	// Arrange
	let state = {a: 0, b: 0, result: 0}
	const action1 = {type: 'A_CHANGED', data: 1}
	const action2 = {type: 'B_CHANGED', data: 1}
	const action3 = {type: 'DO_SUM'}

	// Act
	state = calcReducer(state, action1)
	state = calcReducer(state, action2)
	state = calcReducer(state, action3)

	// Assert
	expect(state.result).toEqual(2)
})
