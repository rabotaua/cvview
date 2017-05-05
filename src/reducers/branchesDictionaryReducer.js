const branchesDictionaryReducer = (state = [], {type, branches}) => {
	switch (type) {
		case 'GET_BRANCHES_DICTIONARY':
			return branches
		default:
			return state
	}
}

export default branchesDictionaryReducer
