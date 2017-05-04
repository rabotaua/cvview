const citiesDictionaryReducer = (state = {}, {type, cities}) => {
	switch (type) {
		case 'GET_CITIES_DICTIONARY_SUCCESS':
			return cities.reduce((result, city) => ({...result, [city.id]: city}), {})
		default:
			return state
	}
}

export default citiesDictionaryReducer
