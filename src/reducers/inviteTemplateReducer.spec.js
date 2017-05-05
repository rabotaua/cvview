import inviteTemplatesReducer from "./inviteTemplatesReducer";
import {getTemplatesListAction} from "../actions/inviteActions";
describe('inviteTemplateReducer', () => {
	it('should do nothing to unknown actions', () => {
		// Arrange
		const currentState = {foo: 'bar'}
		const action = {type: 'ACME'}

		// Act
		const newState = inviteTemplatesReducer(currentState, action)

		// Assert
		expect(newState).toEqual(currentState)
	})

	it('should react to GET_TEMPLATES', () => {
		// Arrange
		const currentState = [{id: 1, text: 'bar'}]
		const action = getTemplatesListAction([{id: 3, text: 'acme'}])

		// Act
		const newState = inviteTemplatesReducer(currentState, action)

		// Assert
		expect(newState.length).toBe(1)
		expect(newState).toEqual(action.inviteTemplates)
	})

	it('should react to ADD_TEMPLATE', () => {
		// Arrange
		const currentState = [{id: 1, text: 'bar'}]
		const action = {
			type: 'ADD_INVITE_TEMPLATE',
			template:
				{id: 3, text: 'acme'}
		}

		// Act
		const newState = inviteTemplatesReducer(currentState, action)

		// Assert
		expect(newState.length).toBe(2)
		expect(newState[1]).toEqual(action.template)
	})
})
