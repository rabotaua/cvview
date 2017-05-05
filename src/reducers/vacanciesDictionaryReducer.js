const vacanciesDictionaryReducer = (state = {}, {type, vacancies}) => {
	switch (type) {
		case 'GET_VACANCIES_DICTIONARY':
			return vacancies
		default:
			return state
	}
}

export default vacanciesDictionaryReducer
