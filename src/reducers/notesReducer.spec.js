import notesReducer from './notesReducer'
it('should not append notes to state', () => {
	const notes = [
		{id: 1, text: 'note1'},
		{id: 2, text: 'note2'}
	]
	const action = {
		type: 'GET_NOTES_LIST',
		notes: notes.reverse()
	}
	const state = notesReducer([{id: 5, text: 'Hello'}], action)
	expect(state).toEqual(notes)
})
