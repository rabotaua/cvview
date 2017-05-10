import {selectInviteTemplateChangeText} from "../../actions/inviteActions";
import selectedInviteTemplateReducer from "./selectedInviteTemplateReducer";

describe('selectedInviteTemplateReducer', () => {

	it('should handle SELECT_INVITE_TEMPLATE_CHANGE_TEXT', () => {
		// Arrange
		const currentState = {text: 'foo'}
		const action = selectInviteTemplateChangeText('bar')

		// Act
		const newState = selectedInviteTemplateReducer(currentState, action)

		// Assert
		expect(newState.text).toBe('bar')
	})

})
